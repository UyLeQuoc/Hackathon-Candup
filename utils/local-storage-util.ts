export class localStorageUtil {
  public static setToken(token: string){
    localStorage.setItem('token', token);
  }
  public static getToken(){
    return localStorage.getItem('token');
  }

  public static clearToken(){
    localStorage.removeItem('token');
  }
}