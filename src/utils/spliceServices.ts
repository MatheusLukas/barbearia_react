export function checkService(service: string, isChecked: boolean) {
  const services: string[] = [];
  if (isChecked == true) {
    if (services.length == 0) {
      services.push(service);
    } else {
      if (services.includes(service)) return;
      else services.push(service);
    }
    console.log(services);
  }
  if (isChecked == false) {
    const index = services.indexOf(service);
    if (index > -1) {
      services.splice(index, 1);
    }
    console.log(services);
  }
}
