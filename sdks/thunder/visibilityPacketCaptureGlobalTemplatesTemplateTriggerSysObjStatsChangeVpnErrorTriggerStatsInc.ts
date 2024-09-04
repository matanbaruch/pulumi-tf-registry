// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsIncState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc.__pulumiType;
    }

    /**
     * Enable automatic packet-capture for ah_not_supported_with_gcm_gmac_sha2
     */
    public readonly ahNotSupportedWithGcmGmacSha2!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_auth_type
     */
    public readonly badAuthType!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_checksum
     */
    public readonly badChecksum!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_encrypt_type
     */
    public readonly badEncryptType!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_encrypt_type_ctr_gcm
     */
    public readonly badEncryptTypeCtrGcm!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_esp_next_header
     */
    public readonly badEspNextHeader!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_frag_size_configuration
     */
    public readonly badFragSizeConfiguration!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_fragment_size
     */
    public readonly badFragmentSize!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_gre_header
     */
    public readonly badGreHeader!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_gre_protocol
     */
    public readonly badGreProtocol!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_inline_data
     */
    public readonly badInlineData!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ip_payload_type
     */
    public readonly badIpPayloadType!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ip_version
     */
    public readonly badIpVersion!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ipcomp_configuration
     */
    public readonly badIpcompConfiguration!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ipsec_auth
     */
    public readonly badIpsecAuth!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ipsec_context
     */
    public readonly badIpsecContext!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ipsec_context_direction
     */
    public readonly badIpsecContextDirection!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ipsec_context_flag_mismatch
     */
    public readonly badIpsecContextFlagMismatch!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ipsec_padding
     */
    public readonly badIpsecPadding!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ipsec_protocol
     */
    public readonly badIpsecProtocol!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ipsec_spi
     */
    public readonly badIpsecSpi!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_ipsec_unknown
     */
    public readonly badIpsecUnknown!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_len
     */
    public readonly badLen!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_min_frag_size_auth_sha384_512
     */
    public readonly badMinFragSizeAuthSha384512!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_opcode
     */
    public readonly badOpcode!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_selector_match
     */
    public readonly badSelectorMatch!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_sg_write_len
     */
    public readonly badSgWriteLen!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for bad_srtp_auth_tag
     */
    public readonly badSrtpAuthTag!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for dsiv_incorrect_param
     */
    public readonly dsivIncorrectParam!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for dummy_payload
     */
    public readonly dummyPayload!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for error_ipv6_decrypt_rh_segs_left_error
     */
    public readonly errorIpv6DecryptRhSegsLeftError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for error_IPv6_extension_header_bad
     */
    public readonly errorIpv6ExtensionHeaderBad!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for ipcomp_payload
     */
    public readonly ipcompPayload!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for ipv6_extension_headers_too_big
     */
    public readonly ipv6ExtensionHeadersTooBig!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for ipv6_hop_by_hop_error
     */
    public readonly ipv6HopByHopError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for ipv6_outbound_rh_copy_addr_error
     */
    public readonly ipv6OutboundRhCopyAddrError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for ipv6_rh_length_error
     */
    public readonly ipv6RhLengthError!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for tfc_padding_with_prefrag_not_supported
     */
    public readonly tfcPaddingWithPrefragNotSupported!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsIncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsIncArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsIncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsIncState | undefined;
            resourceInputs["ahNotSupportedWithGcmGmacSha2"] = state ? state.ahNotSupportedWithGcmGmacSha2 : undefined;
            resourceInputs["badAuthType"] = state ? state.badAuthType : undefined;
            resourceInputs["badChecksum"] = state ? state.badChecksum : undefined;
            resourceInputs["badEncryptType"] = state ? state.badEncryptType : undefined;
            resourceInputs["badEncryptTypeCtrGcm"] = state ? state.badEncryptTypeCtrGcm : undefined;
            resourceInputs["badEspNextHeader"] = state ? state.badEspNextHeader : undefined;
            resourceInputs["badFragSizeConfiguration"] = state ? state.badFragSizeConfiguration : undefined;
            resourceInputs["badFragmentSize"] = state ? state.badFragmentSize : undefined;
            resourceInputs["badGreHeader"] = state ? state.badGreHeader : undefined;
            resourceInputs["badGreProtocol"] = state ? state.badGreProtocol : undefined;
            resourceInputs["badInlineData"] = state ? state.badInlineData : undefined;
            resourceInputs["badIpPayloadType"] = state ? state.badIpPayloadType : undefined;
            resourceInputs["badIpVersion"] = state ? state.badIpVersion : undefined;
            resourceInputs["badIpcompConfiguration"] = state ? state.badIpcompConfiguration : undefined;
            resourceInputs["badIpsecAuth"] = state ? state.badIpsecAuth : undefined;
            resourceInputs["badIpsecContext"] = state ? state.badIpsecContext : undefined;
            resourceInputs["badIpsecContextDirection"] = state ? state.badIpsecContextDirection : undefined;
            resourceInputs["badIpsecContextFlagMismatch"] = state ? state.badIpsecContextFlagMismatch : undefined;
            resourceInputs["badIpsecPadding"] = state ? state.badIpsecPadding : undefined;
            resourceInputs["badIpsecProtocol"] = state ? state.badIpsecProtocol : undefined;
            resourceInputs["badIpsecSpi"] = state ? state.badIpsecSpi : undefined;
            resourceInputs["badIpsecUnknown"] = state ? state.badIpsecUnknown : undefined;
            resourceInputs["badLen"] = state ? state.badLen : undefined;
            resourceInputs["badMinFragSizeAuthSha384512"] = state ? state.badMinFragSizeAuthSha384512 : undefined;
            resourceInputs["badOpcode"] = state ? state.badOpcode : undefined;
            resourceInputs["badSelectorMatch"] = state ? state.badSelectorMatch : undefined;
            resourceInputs["badSgWriteLen"] = state ? state.badSgWriteLen : undefined;
            resourceInputs["badSrtpAuthTag"] = state ? state.badSrtpAuthTag : undefined;
            resourceInputs["dsivIncorrectParam"] = state ? state.dsivIncorrectParam : undefined;
            resourceInputs["dummyPayload"] = state ? state.dummyPayload : undefined;
            resourceInputs["errorIpv6DecryptRhSegsLeftError"] = state ? state.errorIpv6DecryptRhSegsLeftError : undefined;
            resourceInputs["errorIpv6ExtensionHeaderBad"] = state ? state.errorIpv6ExtensionHeaderBad : undefined;
            resourceInputs["ipcompPayload"] = state ? state.ipcompPayload : undefined;
            resourceInputs["ipv6ExtensionHeadersTooBig"] = state ? state.ipv6ExtensionHeadersTooBig : undefined;
            resourceInputs["ipv6HopByHopError"] = state ? state.ipv6HopByHopError : undefined;
            resourceInputs["ipv6OutboundRhCopyAddrError"] = state ? state.ipv6OutboundRhCopyAddrError : undefined;
            resourceInputs["ipv6RhLengthError"] = state ? state.ipv6RhLengthError : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tfcPaddingWithPrefragNotSupported"] = state ? state.tfcPaddingWithPrefragNotSupported : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsIncArgs | undefined;
            resourceInputs["ahNotSupportedWithGcmGmacSha2"] = args ? args.ahNotSupportedWithGcmGmacSha2 : undefined;
            resourceInputs["badAuthType"] = args ? args.badAuthType : undefined;
            resourceInputs["badChecksum"] = args ? args.badChecksum : undefined;
            resourceInputs["badEncryptType"] = args ? args.badEncryptType : undefined;
            resourceInputs["badEncryptTypeCtrGcm"] = args ? args.badEncryptTypeCtrGcm : undefined;
            resourceInputs["badEspNextHeader"] = args ? args.badEspNextHeader : undefined;
            resourceInputs["badFragSizeConfiguration"] = args ? args.badFragSizeConfiguration : undefined;
            resourceInputs["badFragmentSize"] = args ? args.badFragmentSize : undefined;
            resourceInputs["badGreHeader"] = args ? args.badGreHeader : undefined;
            resourceInputs["badGreProtocol"] = args ? args.badGreProtocol : undefined;
            resourceInputs["badInlineData"] = args ? args.badInlineData : undefined;
            resourceInputs["badIpPayloadType"] = args ? args.badIpPayloadType : undefined;
            resourceInputs["badIpVersion"] = args ? args.badIpVersion : undefined;
            resourceInputs["badIpcompConfiguration"] = args ? args.badIpcompConfiguration : undefined;
            resourceInputs["badIpsecAuth"] = args ? args.badIpsecAuth : undefined;
            resourceInputs["badIpsecContext"] = args ? args.badIpsecContext : undefined;
            resourceInputs["badIpsecContextDirection"] = args ? args.badIpsecContextDirection : undefined;
            resourceInputs["badIpsecContextFlagMismatch"] = args ? args.badIpsecContextFlagMismatch : undefined;
            resourceInputs["badIpsecPadding"] = args ? args.badIpsecPadding : undefined;
            resourceInputs["badIpsecProtocol"] = args ? args.badIpsecProtocol : undefined;
            resourceInputs["badIpsecSpi"] = args ? args.badIpsecSpi : undefined;
            resourceInputs["badIpsecUnknown"] = args ? args.badIpsecUnknown : undefined;
            resourceInputs["badLen"] = args ? args.badLen : undefined;
            resourceInputs["badMinFragSizeAuthSha384512"] = args ? args.badMinFragSizeAuthSha384512 : undefined;
            resourceInputs["badOpcode"] = args ? args.badOpcode : undefined;
            resourceInputs["badSelectorMatch"] = args ? args.badSelectorMatch : undefined;
            resourceInputs["badSgWriteLen"] = args ? args.badSgWriteLen : undefined;
            resourceInputs["badSrtpAuthTag"] = args ? args.badSrtpAuthTag : undefined;
            resourceInputs["dsivIncorrectParam"] = args ? args.dsivIncorrectParam : undefined;
            resourceInputs["dummyPayload"] = args ? args.dummyPayload : undefined;
            resourceInputs["errorIpv6DecryptRhSegsLeftError"] = args ? args.errorIpv6DecryptRhSegsLeftError : undefined;
            resourceInputs["errorIpv6ExtensionHeaderBad"] = args ? args.errorIpv6ExtensionHeaderBad : undefined;
            resourceInputs["ipcompPayload"] = args ? args.ipcompPayload : undefined;
            resourceInputs["ipv6ExtensionHeadersTooBig"] = args ? args.ipv6ExtensionHeadersTooBig : undefined;
            resourceInputs["ipv6HopByHopError"] = args ? args.ipv6HopByHopError : undefined;
            resourceInputs["ipv6OutboundRhCopyAddrError"] = args ? args.ipv6OutboundRhCopyAddrError : undefined;
            resourceInputs["ipv6RhLengthError"] = args ? args.ipv6RhLengthError : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tfcPaddingWithPrefragNotSupported"] = args ? args.tfcPaddingWithPrefragNotSupported : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsIncState {
    /**
     * Enable automatic packet-capture for ah_not_supported_with_gcm_gmac_sha2
     */
    ahNotSupportedWithGcmGmacSha2?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_auth_type
     */
    badAuthType?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_checksum
     */
    badChecksum?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_encrypt_type
     */
    badEncryptType?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_encrypt_type_ctr_gcm
     */
    badEncryptTypeCtrGcm?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_esp_next_header
     */
    badEspNextHeader?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_frag_size_configuration
     */
    badFragSizeConfiguration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_fragment_size
     */
    badFragmentSize?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_gre_header
     */
    badGreHeader?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_gre_protocol
     */
    badGreProtocol?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_inline_data
     */
    badInlineData?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ip_payload_type
     */
    badIpPayloadType?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ip_version
     */
    badIpVersion?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipcomp_configuration
     */
    badIpcompConfiguration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_auth
     */
    badIpsecAuth?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_context
     */
    badIpsecContext?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_context_direction
     */
    badIpsecContextDirection?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_context_flag_mismatch
     */
    badIpsecContextFlagMismatch?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_padding
     */
    badIpsecPadding?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_protocol
     */
    badIpsecProtocol?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_spi
     */
    badIpsecSpi?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_unknown
     */
    badIpsecUnknown?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_len
     */
    badLen?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_min_frag_size_auth_sha384_512
     */
    badMinFragSizeAuthSha384512?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_opcode
     */
    badOpcode?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_selector_match
     */
    badSelectorMatch?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_sg_write_len
     */
    badSgWriteLen?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_srtp_auth_tag
     */
    badSrtpAuthTag?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for dsiv_incorrect_param
     */
    dsivIncorrectParam?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for dummy_payload
     */
    dummyPayload?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for error_ipv6_decrypt_rh_segs_left_error
     */
    errorIpv6DecryptRhSegsLeftError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for error_IPv6_extension_header_bad
     */
    errorIpv6ExtensionHeaderBad?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipcomp_payload
     */
    ipcompPayload?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipv6_extension_headers_too_big
     */
    ipv6ExtensionHeadersTooBig?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipv6_hop_by_hop_error
     */
    ipv6HopByHopError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipv6_outbound_rh_copy_addr_error
     */
    ipv6OutboundRhCopyAddrError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipv6_rh_length_error
     */
    ipv6RhLengthError?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for tfc_padding_with_prefrag_not_supported
     */
    tfcPaddingWithPrefragNotSupported?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsInc resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeVpnErrorTriggerStatsIncArgs {
    /**
     * Enable automatic packet-capture for ah_not_supported_with_gcm_gmac_sha2
     */
    ahNotSupportedWithGcmGmacSha2?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_auth_type
     */
    badAuthType?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_checksum
     */
    badChecksum?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_encrypt_type
     */
    badEncryptType?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_encrypt_type_ctr_gcm
     */
    badEncryptTypeCtrGcm?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_esp_next_header
     */
    badEspNextHeader?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_frag_size_configuration
     */
    badFragSizeConfiguration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_fragment_size
     */
    badFragmentSize?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_gre_header
     */
    badGreHeader?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_gre_protocol
     */
    badGreProtocol?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_inline_data
     */
    badInlineData?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ip_payload_type
     */
    badIpPayloadType?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ip_version
     */
    badIpVersion?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipcomp_configuration
     */
    badIpcompConfiguration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_auth
     */
    badIpsecAuth?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_context
     */
    badIpsecContext?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_context_direction
     */
    badIpsecContextDirection?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_context_flag_mismatch
     */
    badIpsecContextFlagMismatch?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_padding
     */
    badIpsecPadding?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_protocol
     */
    badIpsecProtocol?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_spi
     */
    badIpsecSpi?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_ipsec_unknown
     */
    badIpsecUnknown?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_len
     */
    badLen?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_min_frag_size_auth_sha384_512
     */
    badMinFragSizeAuthSha384512?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_opcode
     */
    badOpcode?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_selector_match
     */
    badSelectorMatch?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_sg_write_len
     */
    badSgWriteLen?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for bad_srtp_auth_tag
     */
    badSrtpAuthTag?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for dsiv_incorrect_param
     */
    dsivIncorrectParam?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for dummy_payload
     */
    dummyPayload?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for error_ipv6_decrypt_rh_segs_left_error
     */
    errorIpv6DecryptRhSegsLeftError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for error_IPv6_extension_header_bad
     */
    errorIpv6ExtensionHeaderBad?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipcomp_payload
     */
    ipcompPayload?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipv6_extension_headers_too_big
     */
    ipv6ExtensionHeadersTooBig?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipv6_hop_by_hop_error
     */
    ipv6HopByHopError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipv6_outbound_rh_copy_addr_error
     */
    ipv6OutboundRhCopyAddrError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ipv6_rh_length_error
     */
    ipv6RhLengthError?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for tfc_padding_with_prefrag_not_supported
     */
    tfcPaddingWithPrefragNotSupported?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
