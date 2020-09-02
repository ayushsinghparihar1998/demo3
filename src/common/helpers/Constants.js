const CONSTANTS = {
  IV_LENGTH: 16,
  ENCRYPTION_KEY: 'sd5b75nb7577#^%$%*&G#CGF*&%@#%*&',
  CRYPTER_KEY:
    '0xffffffff,0xffffffff,0xffffffff,0xffffffff,0xffffffff,0xfffffff8',

  azureStorageAccount: 'spikeviewmediastorage',
  azureContainer: 'spikeview-media-production',
  azureBlobURI: 'https://spikeviewmediastorage.blob.core.windows.net',
  feedAlbum: 'feeds',
  feedActivity: {
    CREATEFEED: 'CreateFeed',
    LIKEFEED: 'LikeFeed',
    SHAREFEED: 'ShareFeed',
    COMMENTONFEED: 'CommentOnFeed',
  },
  ROLES: {
    LISTNER: 1,
    PROFESSIONAL: 2,
    USER: 3,
    SUPER_ADMIN: 4,
  },
  MONTHS: [
    { id: 1, value: 'Jan' },
    { id: 2, value: 'Feb' },
    { id: 3, value: 'Mar' },
    { id: 4, value: 'Apr' },
    { id: 5, value: 'May' },
    { id: 6, value: 'Jun' },
    { id: 7, value: 'Jul' },
    { id: 8, value: 'Aug' },
    { id: 9, value: 'Sept' },
    { id: 10, value: 'Oct' },
    { id: 11, value: 'Nov' },
    { id: 12, value: 'Dec' },
  ],
};

export default CONSTANTS;
