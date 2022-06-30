export default {
    'app.name': 'WizeSpace',
    'actions.submit': 'Submit',
    'actions.done': 'Done',
    'actions.exportCSV': 'Export CSV',
    'actions.cancel': 'Cancel',
    'actions.approve': 'Approve',
    'actions.reject': 'Reject',
    'actions.delete': 'Delete',
    'actions.save': 'Save',
    'actions.close': 'Close',
    'actions.search': 'Search',
    'actions.reset': 'Reset',
  
    yes: 'Yes',
    no: 'No',
  
    'table.actions': 'Actions',
    'table.selectedRowCounter': '{value} row(s) selected',
  
    'menu.booking': 'Booking',
    'menu.bookingManagement': 'Booking Management',
    'menu.bookingManagement.data': 'List',
    'menu.bookingManagement.report': 'Report',
    'menu.officeManagement': 'Office Management',
    'menu.officeManagement.configurations': 'Configurations',
    'menu.officeManagement.spaces': 'Spaces',
    'menu.users': 'Users',
    
    'menu.sessionManagement.data': 'Session List',
    'menu.sessionManagement.all': 'Session Management',
    'header.logout': 'Logout',
  
    'login.welcome': 'Welcome to',
    'login.googleButton': 'Sign in with Wizeline account',
    'login.messages.loginFailure.title': 'Login failed',
    'login.messages.loginFailure.generalIssue.description':
      'Cannot login right now, please try later. Sorry for this inconvenient',
    'login.messages.loginFailure.closePopupByUser.description':
      'You closed the login form, please click on the button to login again',
  
    'booking.createNewBookingTitle': 'Create New Booking',
    'booking.myBookingsTitle': 'My Bookings',
    'booking.bookingForm.dateRange': 'Booking date',
    'booking.bookingForm.desk': 'Your desk',
    'booking.bookingForm.needFood': 'I would like to order food',
    'booking.totalDays': 'Total: {totalDays} day(s)',
    'booking.notes.highlightDates': 'Note: Highlighted dates are weekend',
    'booking.seatingMap': 'Open Wizeline Seating Map',
    'booking.errors.bookingDateRangeIsRequired': 'Booking date is required',
    'booking.errors.atLeastOneDateIsRequired':
      'Need choose at least one date you will go to office',
    'booking.error.exceedBookingLimit.title': 'Fully booked this day',
    'booking.error.exceedBookingLimit.description':
      'Please choose another day. For further assistance, please contact {contactEmail}',
  
    'booking.result.seeYouAtOffice': "See you at Wizeline's Office",
    'booking.result.instruction': 'Your booking information is',
    'booking.result.yourBookedDate': 'Your booked date',
    'booking.result.yourDesk': 'Your desk',
    'booking.result.attend': 'Attend at: {type}',
    'booking.result.attendFullDay': 'Attend at: FULL day',
    'booking.result.notFound':
      'Your booking information is not found, please create another one',
    'booking.result.goBack': 'Go back',
    'booking.result.recheckSeatingMap': 'Open Wizeline Seating Map',
    'booking.result.gotIt': 'Got it!',
  
    'booking.myBooking.table.from': 'From',
    'booking.myBooking.table.to': 'To',
    'booking.myBooking.table.status': 'Status',
    'booking.myBooking.table.date': 'Date',
    'booking.myBooking.table.dateType': 'Work on',
    'booking.myBooking.actions.detail': 'Detail',
    'booking.myBooking.actions.delete': 'Cancel booking',
    'bookingDetail.myBooking.deletePopconfirm.title':
      'Are you sure to cancel this booking?',
    'bookingDetail.myBooking.rejectPopconfirm.title':
      'Are you sure to <strong>reject</strong> this booking?',
    'bookingDetail.myBooking.deleteDatesPopconfirm.title':
      'Are you sure to delete selected dates in this booking?',
    'bookingDetail.myBooking.deleteSomeSelectedDatesOnlyPopconfirm.title':
      'Only booking dates in the future will be deleted. Are you sure?',
    'bookingDetail.myBooking.deleteDatesAndBookingPopconfirm.title':
      'You are deleting all dates so this booking will be remove as well. Are you sure?',
  
    'sessionManagement.tabs.all': 'All',
    'sessionManagement.table.requester': 'Requester',
    'sessionManagement.table.desk': 'Desk',
    'sessionManagement.table.from': 'From',
    'sessionManagement.table.to': 'To',
    'sessionManagement.table.status': 'Status',
    'sessionManagement.actions.review': 'Review',
    'sessionManagement.report.title': 'Booking Reports',
    'sessionManagement.report.attendOffice.table.displayName': 'Name',
    'sessionManagement.report.attendOffice.table.email': 'Email',
    'sessionManagement.report.attendOffice.table.total': 'Total',
    'sessionManagement.report.attendOffice.notes.title': 'Notes for table',
    'bookingManagement.report.attendOffice.notes.weekendPart1': 'Cells has color',
    'bookingManagement.report.attendOffice.notes.weekendPart2':
      'in background will be weekend',
    'bookingManagement.report.attendOffice.notes.FULL':
      'Stand for working full day',
    'bookingManagement.report.attendOffice.notes.AM':
      'Stand for working on morning',
    'bookingManagement.report.attendOffice.notes.PM':
      'Stand for working on afternoon',
    'bookingManagement.report.attendOffice.buttons.loadReport': 'Load report',
    'bookingManagement.data.title': 'Booking List',
    'bookingManagement.data.generateReport': 'Generate Report',
  
    'bookingInfo.modal.title': 'Booking Info',
    'bookingInfo.modal.detail': 'Booking detail',
    'bookingInfo.modal.confirmMessage':
      'Would you like to approve/reject this booking?',
    'bookingInfo.requester': 'Requester',
    'bookingInfo.desk': 'Desk',
    'bookingInfo.bookedDate': 'Booked date',
    'bookingInfo.needFood': 'Ordered food',
  
    'bookingDetail.modal.title': 'Your booking detail',
  
    'bookingDetail.bookedDate': 'Your selected date range',
    'bookingDetail.dateTypes': 'Go to office on dates',
  
    'bookingStatus.pending': 'Pending',
    'bookingStatus.approved': 'Approved',
    'bookingStatus.rejected': 'Rejected',
    'bookingStatus.archived': 'Archived',
    'bookingStatus.undefined': 'Unknown',
  
    'bookingDateType.NONE': 'NONE',
    'bookingDateType.AM': 'AM',
    'bookingDateType.PM': 'PM',
    'bookingDateType.FULL': 'FULL',
  
    'users.fields.displayName': 'Name',
    'users.fields.email': 'Email',
    'users.fields.photoUrl': 'Photo',
    'users.fields.role': 'Role',
    'users.fields.division': 'Division',
    'users.actions.edit': 'Edit',
    'users.editModal.title': 'Edit user',
  
    'unauthorized.title': 'Sorry, you are not authorized to view this page',
    'unauthorized.goBack': 'Go back',
    'notifications.fetchError.title': 'Load data failed',
    'notifications.fetchError.description':
      'Please check your network or try again later',
    'notifications.unknown.title': 'Error',
    'notifications.unknown.description':
      'Something bad happen. Please retry later',
    'notifications.internalServerError.title': 'Action failed',
    'notifications.internalServerError.description':
      'We cannot process your request right now. Please retry later',
    'notifications.unauthorized.title': 'Unauthorized',
    'notifications.unauthorized.description':
      'Your session has expired. Please re-login',
  
    'errors.serverError': 'Server failed, please retry later',
  
    'presetRanges.today': 'Today',
    'presetRanges.thisWeek': 'This week',
    'presetRanges.thisMonth': 'This month',
    'presetRanges.nextWeek': 'Next week',
    'presetRanges.nextMonth': 'Next month',
  
    pleaseInput: 'Please input',
  
    'notifications.success': 'Success!',
    'notifications.error': 'Error!',
  
    'officeManagement.configurations.title': 'Configurations',
    'officeConfigurations.MAX_BOOKING_NUMBER':
      'Max users can make booking per one day',
    'officeConfigurations.AUTO_APPROVE': 'Auto approve booking',
    'officeConfigurations.errors.minUsersPerDayDoesNotMatch':
      'Must allow at least one user per day',
    'officeManagement.spaces.title': 'Spaces',
    'officeManagement.spaces.code': 'Code',
    'officeManagement.spaces.deskName': 'Name',
    'officeManagement.spaces.bookingType': 'Booking type',
    'officeManagement.spaces.status': 'Status',
    'officeManagement.spaces.assignee': 'Assignee',
    'officeManagement.spaces.actions.edit': 'Edit',
    'officeManagement.spaces.actions.remove': 'Remove',
    'officeManagement.spaces.deletePopconfirm.title':
      'Are you sure to delete this space?',
    'officeManagement.spaces.addNewSpaceModal.title': 'Add New Space',
    'officeManagement.spaces.addNewSpaceModal.name': 'Space Name',
    'officeManagement.spaces.addNewSpaceModal.type': 'Space Type',
    'officeManagement.spaces.addNewSpaceModal.bookingType': 'Booking Type',
    'officeManagement.spaces.addNewSpaceModal.addedSuccess':
      'New space is added successfully',
    'officeManagement.spaces.addNewSpaceModal.addedFail':
      'New space is added unsuccessfully',
    'officeManagement.spaces.errors.nameIsRequired': 'Space name is required',
    'officeManagement.spaces.editSpaceModal.title': 'Edit Space',
    'officeManagement.spaces.editSpaceModal.assignee': 'Assignee',
    'officeManagement.spaces.editSpaceModal.editedSuccess':
      'Space is edited successfully',
    'officeManagement.spaces.editSpaceModal.editedFail':
      'Space is edited unsuccessfully',
    'officeConfigurations.updateSuccess': 'Configuration updated',
    'officeConfigurations.updateError':
      'Configuration cannot update, please check later',
    'spaces.SpaceType.StandingDesk': 'Standing desk',
    'spaces.SpaceType.Desk': 'Desk',
    'spaces.SpaceType.MeetingRoom': 'Meeting room',
    'spaces.SpaceStatus.Booked': 'Booked',
    'spaces.SpaceStatus.NotAvailable': 'Not available',
    'spaces.SpaceStatus.Available': 'Available',
    'spaces.SpaceBookingType.AdvanceReservation': 'Advance reservation',
    'spaces.SpaceBookingType.HotDesk': 'Hot desk',
    'spaces.SpaceBookingType.PermanentlyBooked': 'Permanently booked',
    'officeManagement.spaces.deletedSuccess': 'Space is deleted successfully',
    'officeManagement.spaces.deletedFail': 'Space is deleted unsuccessfully',
  };
  