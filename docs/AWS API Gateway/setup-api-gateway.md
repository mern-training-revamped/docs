---
sidebar_position: 2
---

# Steps tp setup an API Gateway

- Search for API Gateway in AWS Console
  ![image](https://user-images.githubusercontent.com/7286649/199388733-cdcbe9e9-9609-4bc0-9463-3bad3130a2d8.png)

- Click on API Gateway
  ![image](https://user-images.githubusercontent.com/7286649/199388842-881fc162-6578-4c51-a078-1c6c3863627a.png)
- Click on Create API
  ![image](https://user-images.githubusercontent.com/7286649/199388915-af0608e4-051b-448e-9064-063ebb9dab81.png)
- Select HTTP API > Click on Build
  ![image](https://user-images.githubusercontent.com/7286649/199389041-1f80b6dc-3361-4b9d-9f5c-042b93ba78e4.png)
- Provide and API Name
- Click on Add integration
- Select Lambda as Integration
- Choose the lambda to integrate
  ![image](https://user-images.githubusercontent.com/7286649/199389147-e5a219c5-d782-4895-993b-63f184aaf0bc.png)
- Click Next
- Select Method as GET
- Set Resource path to /localization/api
  ![image](https://user-images.githubusercontent.com/7286649/199389261-c5e23503-b7bd-4fa6-a8e9-611b5a74f895.png)
- Click Next
- Leave stage to default
  ![image](https://user-images.githubusercontent.com/7286649/199389395-2e6b2929-c05d-47cc-a175-3013c7cee0fc.png)
- Click Next
  ![image](https://user-images.githubusercontent.com/7286649/199389476-1b2d755e-92eb-4ed8-a33f-3bbc3531e073.png)
- Click Create
- Select Routes link from left pane
  ![image](https://user-images.githubusercontent.com/7286649/199389625-a6644ac0-e923-46a2-ad9a-2dc6d085808b.png)
