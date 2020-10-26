import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server!
    // requests should be made to ingress-nginx-controller.ingress-nginx.svc.cluster.local
    // You can also make ExternalName service in Kubernetes to shorten the name
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // we are on the browser!
    // requests can be made with a base url of ''
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;
