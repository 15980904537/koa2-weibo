/**
 * @description res的数据模型
 * @author vagabond
 */


/**
 * 基础模块
 */

class BaseModal { 
    constructor({ errno,data,message}) { 
        this.errno = errno;
        if (data) { 
            this.data = data;
        }
        if (message) { 
            this.message = message;
        }
    }
}
/**
 * 成功的数据模型
 */
class SuccessModal extends BaseModal { 
    constructor(data = {}) {
        super({
            errno: 0,
            data
        });
        
    }
    
}
/**
 * 失败的数据模型
 */
class ErrorModal extends BaseModal { 
    constructor({ 
        errno,message
    }) {
        super({
            errno,
            message
        });
        
    }
    
}

module.exports = {
    SuccessModal,
    ErrorModal
}