/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
    var cleanedEmails = [];
    
    emails.forEach(function(email) {
        for (i = 0; i <= email.length; i++) {
            
            // Find and delete periods
            if (email[i] == "." && i < email.indexOf("@")) {
                email = email.replace(email[i], '');
            }
            
            // Find and delete +'s
            if (email[i] == "+") {
                var toRemove = email.slice(i, email.indexOf("@"));
                email = email.replace(toRemove, '');
            }
        }
        cleanedEmails.push(email);
    });
    
    // Remove duplicates
    var uniqueEmails = cleanedEmails.filter(function(item, index) {
        return cleanedEmails.indexOf(item) >= index
    });
    
    return uniqueEmails.length;
    
};
