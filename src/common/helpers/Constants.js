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
    COMMENTONFEED: 'CommentOnFeed'
  },
  ROLES: {
    LISTNER: 1,
    PROFESSIONAL: 2,
    USER: 3,
    SUPER_ADMIN: 4,
  }
};

export default CONSTANTS;
