export const mockImages = ["image1", "image2", "image3", "image4", "image5"];

export const lastItemOnCarousel = mockImages.length - 1;

export const minecraftSoundEffectClick = jest
  .spyOn(window.HTMLMediaElement.prototype, "play")
  .mockImplementation(undefined);