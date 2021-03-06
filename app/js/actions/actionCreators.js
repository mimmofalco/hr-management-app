function uploadJson(json) {
  return {
    type: 'UPLOAD_JSON',
    payload: {
      jsonEmployees: json
    }
  }
}

function uploadJsonError(msg) {
  return {
    type: 'UPLOAD_JSON_ERROR',
    payload: {
      errorMsg: msg
    }
  }
}

function clearState(json) {
  return {
    type: 'REMOVE_JSON'
  }
}

const actionUploadJson = (json) => uploadJson(json);
const actionUploadJsonError = (msg) => uploadJsonError(msg);
const actionClearState = () => clearState();

export { actionUploadJson, actionUploadJsonError, actionClearState };
