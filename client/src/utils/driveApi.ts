/**
 * Searches for a file by name in a specific folder in Google Drive
 * @param fileName - The name of the file to search for
 * @param folderId - The Google Drive folder ID to search in
 * @param apiKey - Your Google Drive API key
 * @returns The file ID if found, null otherwise
 */
export const findFileInFolder = async (
    fileName: string,
    folderId: string,
    apiKey: string
): Promise<string | null> => {
    try {
        // Search for the file within the specified folder
        const query = encodeURIComponent(`name='${fileName}' and '${folderId}' in parents and trashed=false`);
        const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${apiKey}&fields=files(id,name)`;

        const response = await fetch(url);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error Response:', errorText);
            throw new Error(`Failed to search for file: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.files && data.files.length > 0) {
            return data.files[0].id;
        }

        return null;
    } catch (error) {
        console.error('Error searching for file in folder:', error);
        throw error;
    }
};

/**
 * Downloads a file from Google Drive by ID
 * @param fileId - The Google Drive file ID
 * @param apiKey - Your Google Drive API key
 * @param fileName - The filename for download
 */
export const downloadFileById = async (
    fileId: string,
    apiKey: string,
    fileName: string
): Promise<void> => {
    try {
        const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to download file: ${response.status} ${response.statusText}`);
        }

        const blob = await response.blob();

        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
        console.error('Error downloading file:', error);
        throw error;
    }
};

/**
 * Downloads a file from Google Drive by searching for it by name in a specific folder
 * @param fileName - The name of the file on Google Drive
 * @param folderId - The folder ID to search in
 * @param apiKey - Your Google Drive API key
 * @param downloadAs - Optional custom filename for download
 */
export const downloadFromDrive = async (
    fileName: string,
    folderId: string,
    apiKey: string,
    downloadAs?: string
): Promise<void> => {
    try {
        console.log('Searching for file:', fileName, 'in folder:', folderId);
        
        // Search for the file in the specified folder
        const fileId = await findFileInFolder(fileName, folderId, apiKey);

        if (!fileId) {
            throw new Error(`File "${fileName}" not found in the specified folder`);
        }

        console.log('Found file ID:', fileId);

        // Download the file
        await downloadFileById(fileId, apiKey, downloadAs || fileName);
    } catch (error) {
        console.error('Error downloading from Google Drive:', error);
        throw error;
    }
};

/**
 * Gets the direct download URL for a Google Drive file
 * @param fileId - The Google Drive file ID
 * @returns Download URL
 */
export const getDriveDownloadUrl = (fileId: string): string => {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

/**
 * Gets the direct view URL for a Google Drive file
 * @param fileId - The Google Drive file ID
 * @returns View URL
 */
export const getDriveViewUrl = (fileId: string): string => {
    return `https://drive.google.com/file/d/${fileId}/view`;
};
