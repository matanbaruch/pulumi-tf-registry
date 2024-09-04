// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ClientCertAuthority extends pulumi.CustomResource {
    /**
     * Get an existing ClientCertAuthority resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClientCertAuthorityState, opts?: pulumi.CustomResourceOptions): ClientCertAuthority {
        return new ClientCertAuthority(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/clientCertAuthority:ClientCertAuthority';

    /**
     * Returns true if the given object is an instance of ClientCertAuthority.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClientCertAuthority {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClientCertAuthority.__pulumiType;
    }

    /**
     * The name of the Certificate Authority.
     */
    public readonly certAuthorityName!: pulumi.Output<string>;
    /**
     * The PEM formatted content for the trusted root certificate of a client Certificate Authority. Changes to this attribute
     * are synchronized to HA mates via config-sync. The default value is `""`.
     */
    public readonly certContent!: pulumi.Output<string | undefined>;
    /**
     * The scheduled CRL refresh day(s), specified as "daily" or a comma-separated list of days. Days must be specified as
     * "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", or "Sat", with no spaces, and in sorted order from Sunday to Saturday. The
     * empty-string ("") can also be specified, indicating no schedule is configured ("crl_time_list" must also be configured
     * to the empty-string). Changes to this attribute are synchronized to HA mates via config-sync. The default value is
     * `"daily"`.
     */
    public readonly crlDayList!: pulumi.Output<string | undefined>;
    /**
     * The scheduled CRL refresh time(s), specified as "hourly" or a comma-separated list of 24-hour times in the form hh:mm,
     * or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59. The empty-string ("")
     * can also be specified, indicating no schedule is configured ("crl_day_list" must also be configured to the
     * empty-string). Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"3:00"`.
     */
    public readonly crlTimeList!: pulumi.Output<string | undefined>;
    /**
     * The URL for the CRL source. This is a required attribute for CRL to be operational and the URL must be complete with
     * http:// included. IPv6 addresses must be enclosed in square-brackets. Modifying this attribute while the object (or the
     * relevant part of the object) is administratively enabled may be service impacting as revocation_check_enabled will be
     * temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync.
     * The default value is `""`.
     */
    public readonly crlUrl!: pulumi.Output<string | undefined>;
    /**
     * Enable or disable allowing a non-responder certificate to sign an OCSP response. Typically used with an OCSP override
     * URL in cases where a single certificate is used to sign client certificates and OCSP responses. Changes to this
     * attribute are synchronized to HA mates via config-sync. The default value is `false`.
     */
    public readonly ocspNonResponderCertEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The OCSP responder URL to use for overriding the one supplied in the client certificate. The URL must be complete with
     * http:// included. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
     */
    public readonly ocspOverrideUrl!: pulumi.Output<string | undefined>;
    /**
     * The timeout in seconds to receive a response from the OCSP responder after sending a request or making the initial
     * connection attempt. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `5`.
     */
    public readonly ocspTimeout!: pulumi.Output<number | undefined>;
    /**
     * Enable or disable Certificate Authority revocation checking. Changes to this attribute are synchronized to HA mates via
     * config-sync. The default value is `false`.
     */
    public readonly revocationCheckEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ClientCertAuthority resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClientCertAuthorityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClientCertAuthorityArgs | ClientCertAuthorityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClientCertAuthorityState | undefined;
            resourceInputs["certAuthorityName"] = state ? state.certAuthorityName : undefined;
            resourceInputs["certContent"] = state ? state.certContent : undefined;
            resourceInputs["crlDayList"] = state ? state.crlDayList : undefined;
            resourceInputs["crlTimeList"] = state ? state.crlTimeList : undefined;
            resourceInputs["crlUrl"] = state ? state.crlUrl : undefined;
            resourceInputs["ocspNonResponderCertEnabled"] = state ? state.ocspNonResponderCertEnabled : undefined;
            resourceInputs["ocspOverrideUrl"] = state ? state.ocspOverrideUrl : undefined;
            resourceInputs["ocspTimeout"] = state ? state.ocspTimeout : undefined;
            resourceInputs["revocationCheckEnabled"] = state ? state.revocationCheckEnabled : undefined;
        } else {
            const args = argsOrState as ClientCertAuthorityArgs | undefined;
            if ((!args || args.certAuthorityName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certAuthorityName'");
            }
            resourceInputs["certAuthorityName"] = args ? args.certAuthorityName : undefined;
            resourceInputs["certContent"] = args ? args.certContent : undefined;
            resourceInputs["crlDayList"] = args ? args.crlDayList : undefined;
            resourceInputs["crlTimeList"] = args ? args.crlTimeList : undefined;
            resourceInputs["crlUrl"] = args ? args.crlUrl : undefined;
            resourceInputs["ocspNonResponderCertEnabled"] = args ? args.ocspNonResponderCertEnabled : undefined;
            resourceInputs["ocspOverrideUrl"] = args ? args.ocspOverrideUrl : undefined;
            resourceInputs["ocspTimeout"] = args ? args.ocspTimeout : undefined;
            resourceInputs["revocationCheckEnabled"] = args ? args.revocationCheckEnabled : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClientCertAuthority.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClientCertAuthority resources.
 */
export interface ClientCertAuthorityState {
    /**
     * The name of the Certificate Authority.
     */
    certAuthorityName?: pulumi.Input<string>;
    /**
     * The PEM formatted content for the trusted root certificate of a client Certificate Authority. Changes to this attribute
     * are synchronized to HA mates via config-sync. The default value is `""`.
     */
    certContent?: pulumi.Input<string>;
    /**
     * The scheduled CRL refresh day(s), specified as "daily" or a comma-separated list of days. Days must be specified as
     * "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", or "Sat", with no spaces, and in sorted order from Sunday to Saturday. The
     * empty-string ("") can also be specified, indicating no schedule is configured ("crl_time_list" must also be configured
     * to the empty-string). Changes to this attribute are synchronized to HA mates via config-sync. The default value is
     * `"daily"`.
     */
    crlDayList?: pulumi.Input<string>;
    /**
     * The scheduled CRL refresh time(s), specified as "hourly" or a comma-separated list of 24-hour times in the form hh:mm,
     * or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59. The empty-string ("")
     * can also be specified, indicating no schedule is configured ("crl_day_list" must also be configured to the
     * empty-string). Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"3:00"`.
     */
    crlTimeList?: pulumi.Input<string>;
    /**
     * The URL for the CRL source. This is a required attribute for CRL to be operational and the URL must be complete with
     * http:// included. IPv6 addresses must be enclosed in square-brackets. Modifying this attribute while the object (or the
     * relevant part of the object) is administratively enabled may be service impacting as revocation_check_enabled will be
     * temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync.
     * The default value is `""`.
     */
    crlUrl?: pulumi.Input<string>;
    /**
     * Enable or disable allowing a non-responder certificate to sign an OCSP response. Typically used with an OCSP override
     * URL in cases where a single certificate is used to sign client certificates and OCSP responses. Changes to this
     * attribute are synchronized to HA mates via config-sync. The default value is `false`.
     */
    ocspNonResponderCertEnabled?: pulumi.Input<boolean>;
    /**
     * The OCSP responder URL to use for overriding the one supplied in the client certificate. The URL must be complete with
     * http:// included. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
     */
    ocspOverrideUrl?: pulumi.Input<string>;
    /**
     * The timeout in seconds to receive a response from the OCSP responder after sending a request or making the initial
     * connection attempt. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `5`.
     */
    ocspTimeout?: pulumi.Input<number>;
    /**
     * Enable or disable Certificate Authority revocation checking. Changes to this attribute are synchronized to HA mates via
     * config-sync. The default value is `false`.
     */
    revocationCheckEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ClientCertAuthority resource.
 */
export interface ClientCertAuthorityArgs {
    /**
     * The name of the Certificate Authority.
     */
    certAuthorityName: pulumi.Input<string>;
    /**
     * The PEM formatted content for the trusted root certificate of a client Certificate Authority. Changes to this attribute
     * are synchronized to HA mates via config-sync. The default value is `""`.
     */
    certContent?: pulumi.Input<string>;
    /**
     * The scheduled CRL refresh day(s), specified as "daily" or a comma-separated list of days. Days must be specified as
     * "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", or "Sat", with no spaces, and in sorted order from Sunday to Saturday. The
     * empty-string ("") can also be specified, indicating no schedule is configured ("crl_time_list" must also be configured
     * to the empty-string). Changes to this attribute are synchronized to HA mates via config-sync. The default value is
     * `"daily"`.
     */
    crlDayList?: pulumi.Input<string>;
    /**
     * The scheduled CRL refresh time(s), specified as "hourly" or a comma-separated list of 24-hour times in the form hh:mm,
     * or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59. The empty-string ("")
     * can also be specified, indicating no schedule is configured ("crl_day_list" must also be configured to the
     * empty-string). Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"3:00"`.
     */
    crlTimeList?: pulumi.Input<string>;
    /**
     * The URL for the CRL source. This is a required attribute for CRL to be operational and the URL must be complete with
     * http:// included. IPv6 addresses must be enclosed in square-brackets. Modifying this attribute while the object (or the
     * relevant part of the object) is administratively enabled may be service impacting as revocation_check_enabled will be
     * temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync.
     * The default value is `""`.
     */
    crlUrl?: pulumi.Input<string>;
    /**
     * Enable or disable allowing a non-responder certificate to sign an OCSP response. Typically used with an OCSP override
     * URL in cases where a single certificate is used to sign client certificates and OCSP responses. Changes to this
     * attribute are synchronized to HA mates via config-sync. The default value is `false`.
     */
    ocspNonResponderCertEnabled?: pulumi.Input<boolean>;
    /**
     * The OCSP responder URL to use for overriding the one supplied in the client certificate. The URL must be complete with
     * http:// included. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
     */
    ocspOverrideUrl?: pulumi.Input<string>;
    /**
     * The timeout in seconds to receive a response from the OCSP responder after sending a request or making the initial
     * connection attempt. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `5`.
     */
    ocspTimeout?: pulumi.Input<number>;
    /**
     * Enable or disable Certificate Authority revocation checking. Changes to this attribute are synchronized to HA mates via
     * config-sync. The default value is `false`.
     */
    revocationCheckEnabled?: pulumi.Input<boolean>;
}
