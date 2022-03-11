namespace core
{
    export class Contact
    {

        //private instance members
        private m_fullName: string;
        private m_contactNumber: string;
        private m_emailAddress: string;

        // getters and setters
        public get FullName(): string
        {
            return this.m_fullName;
        }
    
        public set FullName(full_name: string)
        {
            this.m_fullName = full_name;
        }
    
        public get ContactNumber(): string
        {
            return this.m_contactNumber;
        }
    
        public set ContactNumber(contact_number: string)
        {
            this.m_contactNumber = contact_number;
        }
    
        public get EmailAddress(): string
        {
            return this.m_emailAddress;
        }
    
        public set EmailAddress(email_address: string)
        {
            this.m_emailAddress = email_address;
        }
    
        // constructor
        constructor(fullName: string = "", contactNumber: string = "", emailAddress: string = "")
        {
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;
        }
    
        // public utility methods
        
        /**
         * This method converts the object's properties to a comma-seperated string
         *
         * @return {(string | null)}
         * 
         */
        serialize(): string
        {
            if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
            {
                return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
            }
            console.error("One or more properties of the Contact Object are missing or invalid");
            return "";
        }
    
        /**
         * This method separates the data string parameter into the object's properties
         *
         * @param {string} data
         * @memberof Contact
         */
        deserialize(data: string): void // assume that data is in a comma-separated format (string array of properties)
        {
            let propertyArray: string[] = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }
    
        // overridden methods
        /**
         * This method overrides the built-in toString method and
         * returns a string that contains the values of the object's
         * properties
         * @override
         * @memberof Contact
         */
        toString(): string
        {
            return `Full Name: ${this.FullName} \nContact Number: ${this.ContactNumber} \nEmail Address: ${this.EmailAddress}`;
        }
    }

}



