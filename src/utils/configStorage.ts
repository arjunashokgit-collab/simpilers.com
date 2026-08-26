import { MEDIA_CONFIG, InstagramWinner } from '../media/giveawayData';
import { ContestPost, Participant } from '../types';

export interface FullGiveawayData {
  winnerCount: number;
  countdownSeconds: number;
  giveawayTitle: string;
  authorName: string;
  authorUsername: string;
  authorAvatar: string;
  videoImage: string;
  videoCaption: string;
  commentsCount: number;
  likesCount: number;
  resultCode: string;
  resultLink: string;
  winners: InstagramWinner[];
  extraParticipants: Participant[];
}

export const STORAGE_KEY = 'simpliers_giveaway_media_config_v3';

export const DEFAULT_EXTRA_PARTICIPANTS: Participant[] = [
  {
    id: 'p1',
    username: '_vidhu_veee',
    fullName: 'Vidhu V',
    avatarUrl: '/avatars/_vidhu_veee.jpg',
    comment: 'Super video! Hoping to win 🔥🙌',
    likesCount: 18,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p2',
    username: 'jayeshgopinath',
    fullName: 'Jayesh Gopinath',
    avatarUrl: '/avatars/jayeshgopinath.jpg',
    comment: 'Awesome post bro 💛✨',
    likesCount: 9,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p3',
    username: '_iamshebin__',
    fullName: 'Shebin',
    avatarUrl: '/avatars/_iamshebin__.jpg',
    comment: 'Sunset vibes & great contest 🌅🔥',
    likesCount: 14,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p4',
    username: 'abelabelps',
    fullName: 'Abel P S',
    avatarUrl: '/avatars/abelabelps.jpg',
    comment: 'Nature beauty 😍 All the best everyone',
    likesCount: 7,
    timeAgo: '3d',
    isValid: true,
  },
  {
    id: 'p5',
    username: '_.mr._.perfect._.25',
    fullName: 'Mr Perfect',
    avatarUrl: '/avatars/_.mr._.perfect._.25.jpg',
    comment: 'Night ride mode on 🌙🤟',
    likesCount: 12,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p6',
    username: 'naseema_kp___',
    fullName: 'Naseema K P',
    avatarUrl: '/avatars/naseema_kp___.jpg',
    comment: 'Cuties ❤️ Winning this insha Allah',
    likesCount: 15,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p7',
    username: 'anxiidh',
    fullName: 'Anshid',
    avatarUrl: '/avatars/anxiidh.jpg',
    comment: 'Great content 🔥🙌',
    likesCount: 6,
    timeAgo: '4d',
    isValid: true,
  },
  {
    id: 'p8',
    username: 'mr.sam_vlm',
    fullName: 'Sam VLM',
    avatarUrl: '/avatars/mr.sam_vlm.jpg',
    comment: 'Rose vibes 🌹 Best of luck!',
    likesCount: 8,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p9',
    username: 'sinnannnnn11',
    fullName: 'Sinan',
    avatarUrl: '/avatars/sinnannnnn11.jpg',
    comment: 'Awesome vibe bro 🚀💜',
    likesCount: 11,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p10',
    username: 'ansaf_kunjathur',
    fullName: 'Ansaf Kunjathur',
    avatarUrl: '/avatars/ansaf_kunjathur.jpg',
    comment: 'Count me in! Top quality 🔥',
    likesCount: 22,
    timeAgo: '3d',
    isValid: true,
  },
  {
    id: 'p11',
    username: 'lauren__px',
    fullName: 'Lauren P X',
    avatarUrl: '/avatars/lauren__px.jpg',
    comment: 'Looking fire 🔥 Hope I get selected!',
    likesCount: 19,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p12',
    username: 'mazinmohammeddddd',
    fullName: 'Mazin Mohammed',
    avatarUrl: '/avatars/mazinmohammeddddd.jpg',
    comment: 'Style icon! Good luck to all 🧡',
    likesCount: 13,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p13',
    username: 'adh_i.i_',
    fullName: 'Adhi',
    avatarUrl: '/avatars/adh_i.i_.jpg',
    comment: 'Nice post! Let’s go 🤟',
    likesCount: 8,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p14',
    username: '_.mr._.komban._',
    fullName: 'Mr Komban',
    avatarUrl: '/avatars/_.mr._.komban._.jpg',
    comment: 'Komban style 🔴⚫ Best wishes!',
    likesCount: 24,
    timeAgo: '3d',
    isValid: true,
  },
  {
    id: 'p15',
    username: '__alexpandian__',
    fullName: 'Alex Pandian',
    avatarUrl: '/avatars/__alexpandian__.jpg',
    comment: 'Mass entry! Great giveaway 🔥',
    likesCount: 17,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p16',
    username: 'visual._.craftsman',
    fullName: 'Visual Craftsman',
    avatarUrl: '/avatars/visual._.craftsman.jpg',
    comment: 'Top tier visuals 🎬📸 Keep it up',
    likesCount: 31,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p17',
    username: 'vineeth8987',
    fullName: 'Vineeth',
    avatarUrl: '/avatars/vineeth8987.jpg',
    comment: 'Solid vibe! Hope to win this 💯',
    likesCount: 10,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p18',
    username: '__thahir_t',
    fullName: 'Thahir T',
    avatarUrl: '/avatars/__thahir_t.jpg',
    comment: 'Concert energy 🔥💥 Best post',
    likesCount: 16,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p19',
    username: 'thohir_shan___',
    fullName: 'Thohir Shan',
    avatarUrl: '/avatars/thohir_shan___.jpg',
    comment: 'Fingers crossed 🤞🔥',
    likesCount: 7,
    timeAgo: '4d',
    isValid: true,
  },
  {
    id: 'p20',
    username: 'a_j_u__ajmal',
    fullName: 'Aju Ajmal',
    avatarUrl: '/avatars/a_j_u__ajmal.jpg',
    comment: 'Golden hour vibes 🌅🙌',
    likesCount: 14,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p21',
    username: 'ameeeee._____',
    fullName: 'Ameen',
    avatarUrl: '/avatars/ameeeee._____.jpg',
    comment: 'Camera ready 📸 Great giveaway',
    likesCount: 20,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p22',
    username: 'monsoon_abaya',
    fullName: 'Monsoon Abaya',
    avatarUrl: '/avatars/monsoon_abaya.jpg',
    comment: 'Beautiful collection! Support from Monsoon Abaya 💜',
    likesCount: 25,
    timeAgo: '3d',
    isValid: true,
  },
  {
    id: 'p23',
    username: 'ansal__anzu',
    fullName: 'Ansal Anzu',
    avatarUrl: '/avatars/ansal__anzu.jpg',
    comment: 'Nice one bro 👍✨',
    likesCount: 9,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p24',
    username: 'angamalykaran__6848',
    fullName: 'Angamaly Karan',
    avatarUrl: '/avatars/angamalykaran__6848.jpg',
    comment: 'Suit up! Best giveaway of the month 👔🔥',
    likesCount: 28,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p25',
    username: 'jipson_vs',
    fullName: 'Jipson V S',
    avatarUrl: '/avatars/jipson_vs.jpg',
    comment: 'Cool post! Count me in 💙',
    likesCount: 12,
    timeAgo: '3d',
    isValid: true,
  },
  {
    id: 'p26',
    username: 'g_o_p_i_k_a_22_s',
    fullName: 'Gopika S',
    avatarUrl: '/avatars/g_o_p_i_k_a_22_s.jpg',
    comment: 'Green aesthetic 🌿 Wishing everyone the best',
    likesCount: 15,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p27',
    username: 'itz_me___mansoor',
    fullName: 'Mansoor',
    avatarUrl: '/avatars/itz_me___mansoor.jpg',
    comment: 'Swag on point 😎🔥',
    likesCount: 19,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p28',
    username: '_thahir.fjo',
    fullName: 'Thahir FJO',
    avatarUrl: '/avatars/_thahir.fjo.jpg',
    comment: 'Rose lover 🌹 All the best!',
    likesCount: 8,
    timeAgo: '4d',
    isValid: true,
  },
  {
    id: 'p29',
    username: 'irfahnh',
    fullName: 'Irfan H',
    avatarUrl: '/avatars/irfahnh.jpg',
    comment: 'Neon vibes 🕶️ Let’s win this!',
    likesCount: 21,
    timeAgo: '1d',
    isValid: true,
  },
  {
    id: 'p30',
    username: 'utha_ya_06',
    fullName: 'Uthaya',
    avatarUrl: '/avatars/utha_ya_06.jpg',
    comment: 'Biker life 🏍️🔥 Full support!',
    likesCount: 27,
    timeAgo: '2d',
    isValid: true,
  },
  {
    id: 'p31',
    username: 'ayashhamd_',
    fullName: 'Ayash Hamd',
    avatarUrl: '/avatars/ayashhamd_.jpg',
    comment: 'Cute entry 🥰 Best of luck everyone!',
    likesCount: 14,
    timeAgo: '1d',
    isValid: true,
  },
];

export const getDefaultGiveawayData = (): FullGiveawayData => {
  return {
    winnerCount: MEDIA_CONFIG.winnerCount || 4,
    countdownSeconds: 8,
    giveawayTitle: MEDIA_CONFIG.giveawayTitle || "Anna George's Giveaway",
    authorName: MEDIA_CONFIG.authorName || "Anna George",
    authorUsername: MEDIA_CONFIG.authorUsername || "___anna__geor...",
    authorAvatar: MEDIA_CONFIG.authorAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    videoImage: MEDIA_CONFIG.videoImage || "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80",
    videoCaption: MEDIA_CONFIG.videoCaption || "എന്റെ പിന്നാലെ ഒരു വലിയ ലോകമേ ഇണ്ടെന്ന് ‼️‼️",
    commentsCount: MEDIA_CONFIG.commentsCount || 17,
    likesCount: MEDIA_CONFIG.likesCount || 391,
    resultCode: MEDIA_CONFIG.resultCode || "REHEUV",
    resultLink: MEDIA_CONFIG.resultLink || "smpl.rs/g/REHEUV",
    winners: MEDIA_CONFIG.winners && MEDIA_CONFIG.winners.length > 0 ? [...MEDIA_CONFIG.winners] : [
      {
        username: "itsmebinsabu",
        fullName: "Mebin Sabu",
        profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
        comment: "Rider pro max 🤟",
        hasGif: false,
      },
      {
        username: "spin.torque",
        fullName: "Spin Torque Auto",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        comment: "Race speed ready",
        hasGif: true,
      },
      {
        username: "i___am___sonya",
        fullName: "Sonya Mary",
        profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        comment: "Angane parappichu vidu paapppaaa 🔥🔥🔥🥰🥰",
        hasGif: false,
      },
      {
        username: "alluanepaul",
        fullName: "Allu Anne Paul",
        profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
        comment: "Super video! Winning this 🔥",
        hasGif: false,
      },
    ],
    extraParticipants: DEFAULT_EXTRA_PARTICIPANTS,
  };
};

export const loadStoredGiveawayData = (): FullGiveawayData => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...getDefaultGiveawayData(),
        ...parsed,
      };
    }
  } catch (err) {
    console.error('Failed to load giveaway configuration from localStorage:', err);
  }
  return getDefaultGiveawayData();
};

export const saveStoredGiveawayData = (data: FullGiveawayData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save giveaway configuration to localStorage:', err);
  }
};

export const resetStoredGiveawayData = (): FullGiveawayData => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear localStorage:', err);
  }
  return getDefaultGiveawayData();
};

/**
 * Reads any File object from user's filesystem and converts it to a Base64 data URL
 */
export const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read file as data URL'));
      }
    };
    reader.onerror = () => reject(reader.error || new Error('FileReader error'));
    reader.readAsDataURL(file);
  });
};

/**
 * Converts the FullGiveawayData into runtime ContestPost, designatedWinners, and allParticipants
 */
export const buildRuntimeConfig = (data: FullGiveawayData) => {
  const designatedWinners: Participant[] = data.winners.map((w, idx) => ({
    id: `winner-${idx + 1}`,
    username: w.username,
    fullName: w.fullName,
    avatarUrl: w.profileImage,
    comment: w.comment,
    hasGif: w.hasGif,
    likesCount: 15 + idx * 7,
    timeAgo: `${idx + 1}d`,
    isValid: true,
  }));

  const post: ContestPost = {
    id: 'post_01',
    title: data.giveawayTitle,
    authorUsername: data.authorUsername,
    authorName: data.authorName,
    authorAvatar: data.authorAvatar,
    postImage: data.videoImage,
    caption: data.videoCaption,
    commentsCount: data.commentsCount,
    likesCount: data.likesCount,
    isVerified: true,
    resultCode: data.resultCode || 'REHEUV',
    resultLink: data.resultLink || 'smpl.rs/g/REHEUV',
  };

  const allParticipants: Participant[] = [
    ...designatedWinners,
    ...(data.extraParticipants && data.extraParticipants.length > 0
      ? data.extraParticipants
      : DEFAULT_EXTRA_PARTICIPANTS),
  ];

  return {
    winnerCount: Math.min(data.winnerCount || 4, designatedWinners.length || 1),
    countdownSeconds: data.countdownSeconds || 8,
    post,
    designatedWinners,
    allParticipants,
  };
};

/**
 * Generate TypeScript code string that can be pasted into `src/media/giveawayData.ts`
 */
export const generateTypeScriptCode = (data: FullGiveawayData): string => {
  return `/**
 * ============================================================================
 * SIMPLIERS GIVEAWAY MEDIA & WINNERS CONFIGURATION
 * File Path: src/media/giveawayData.ts
 * ============================================================================
 */

export interface InstagramWinner {
  username: string;
  fullName: string;
  profileImage: string;
  comment: string;
  hasGif?: boolean;
}

export const MEDIA_CONFIG = {
  winnerCount: ${data.winnerCount},

  giveawayTitle: ${JSON.stringify(data.giveawayTitle)},
  authorName: ${JSON.stringify(data.authorName)},
  authorUsername: ${JSON.stringify(data.authorUsername)},
  authorAvatar: ${JSON.stringify(data.authorAvatar)},

  videoImage: ${JSON.stringify(data.videoImage)},
  videoCaption: ${JSON.stringify(data.videoCaption)},

  commentsCount: ${data.commentsCount},
  likesCount: ${data.likesCount},
  resultCode: ${JSON.stringify(data.resultCode)},
  resultLink: ${JSON.stringify(data.resultLink)},

  winners: ${JSON.stringify(data.winners, null, 4)} as InstagramWinner[],
};
`;
};
