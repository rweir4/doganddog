class CustomerInquiryMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def customer_inquiry
    @name = params[:mailer][:name]
    @email = params[:mailer][:email]
    @message = params[:mailer][:message]

    mail(to: 'hello.ginnyandco@gmail.com', subject: 'Customer Inquiry')
  end
end