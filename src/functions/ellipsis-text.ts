export const ellipsisText = (str: string, maxlimit: number): string => {
    if(str.length > maxlimit){
        for (let i = maxlimit; i > 0; i--){
            if( str.charAt(i)== " " ){
                return (((str).substring(0,i)) + '...')
            }
        }   
    }
    
    return str
}