import * as Route from '../js/constants/RouteConstants'

export default [
  {
    path: Route.HOME_PAGE_PATH,
    name: Route.HOME_PAGE_NAME,
    component: require('../components/HomePageView').default,
    children: [
      {
        path: Route.DEFAULT_VIEW_PATH,
        name: Route.DEFAULT_VIEW_NAME,
        component: require('../components/ContainersView/ContainersView').default
      },
      {
        path: Route.CONTAINERS_VIEW_PATH,
        name: Route.CONTAINERS_VIEW_NAME,
        component: require('../components/ContainersView/ContainersView').default
      },
      {
        path: Route.SINGLE_CONTAINER_VIEW_PATH,
        name: Route.SINGLE_CONTAINER_VIEW_NAME,
        component: require('../components/ContainersView/SingleContainerView').default
      },
      {
        path: Route.IMAGES_VIEW_PATH,
        name: Route.IMAGES_VIEW_NAME,
        component: require('../components/ImagesView/ImagesView').default
      },
      {
        path: Route.SINGLE_IMAGE_VIEW_PATH,
        name: Route.SINGLE_IMAGE_VIEW_NAME,
        component: require('../components/ImagesView/SingleImageView').default
      },
      {
        path: Route.VOLUMES_VIEW_PATH,
        name: Route.VOLUMES_VIEW_NAME,
        component: require('../components/VolumesView/VolumesView').default
      },
      {
        path: Route.SINGLE_VOLUME_VIEW_PATH,
        name: Route.SINGLE_VOLUME_VIEW_NAME,
        component: require('../components/VolumesView/SingleVolumeView').default
      },
      {
        path: Route.NETWORKS_VIEW_PATH,
        name: Route.NETWORKS_VIEW_NAME,
        component: require('../components/NetworksView/NetworksView').default
      },
      {
        path: Route.SINGLE_NETWORK_VIEW_PATH,
        name: Route.SINGLE_NETWORK_VIEW_NAME,
        component: require('../components/NetworksView/SingleNetworkView').default
      },
      {
        path: Route.PLUGINS_VIEW_PATH,
        name: Route.PLUGINS_VIEW_NAME,
        component: require('../components/PluginsView/PluginsView').default
      },
      {
        path: Route.DOCKER_HUB_VIEW_PATH,
        name: Route.DOCKER_HUB_VIEW_NAME,
        component: require('../components/DockerHubView/DockerHubView').default
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
