const IconText = ({ icon: Icon, text }) => (
  <div className="flex items-center text-sm text-gray-600">
    <Icon className="w-4 h-4 mr-2 text-gray-500" />
    <span>{text}</span>
  </div>
);
export default IconText