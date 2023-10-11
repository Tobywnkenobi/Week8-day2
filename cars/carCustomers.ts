class CarCustomer{
    [customer: string]: string
  }
  
  const customer = new CarCustomer()
  
  customer.sean = 'tesla x'
  
  customer.dylan = 'honda fit'
  
  customer.milad = 'toyota forerunner'
  
  /*
  doesn't match index signature
  customer.toby = 1990  
  */