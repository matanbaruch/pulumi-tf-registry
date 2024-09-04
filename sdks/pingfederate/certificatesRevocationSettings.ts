// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CertificatesRevocationSettings extends pulumi.CustomResource {
    /**
     * Get an existing CertificatesRevocationSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificatesRevocationSettingsState, opts?: pulumi.CustomResourceOptions): CertificatesRevocationSettings {
        return new CertificatesRevocationSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/certificatesRevocationSettings:CertificatesRevocationSettings';

    /**
     * Returns true if the given object is an instance of CertificatesRevocationSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertificatesRevocationSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertificatesRevocationSettings.__pulumiType;
    }

    /**
     * Certificate revocation CRL settings. If this attribute is omitted, CRL checks are disabled.
     */
    public readonly crlSettings!: pulumi.Output<outputs.CertificatesRevocationSettingsCrlSettings | undefined>;
    /**
     * Certificate revocation OCSP settings. If this attribute is omitted, OCSP checks are disabled.
     */
    public readonly ocspSettings!: pulumi.Output<outputs.CertificatesRevocationSettingsOcspSettings | undefined>;
    /**
     * If OCSP messaging is routed through a proxy server, specify the server's host (DNS name or IP address) and the port
     * number. The same proxy information applies to CRL checking, when CRL is enabled for failover.
     */
    public readonly proxySettings!: pulumi.Output<outputs.CertificatesRevocationSettingsProxySettings | undefined>;

    /**
     * Create a CertificatesRevocationSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CertificatesRevocationSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificatesRevocationSettingsArgs | CertificatesRevocationSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CertificatesRevocationSettingsState | undefined;
            resourceInputs["crlSettings"] = state ? state.crlSettings : undefined;
            resourceInputs["ocspSettings"] = state ? state.ocspSettings : undefined;
            resourceInputs["proxySettings"] = state ? state.proxySettings : undefined;
        } else {
            const args = argsOrState as CertificatesRevocationSettingsArgs | undefined;
            resourceInputs["crlSettings"] = args ? args.crlSettings : undefined;
            resourceInputs["ocspSettings"] = args ? args.ocspSettings : undefined;
            resourceInputs["proxySettings"] = args ? args.proxySettings : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CertificatesRevocationSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CertificatesRevocationSettings resources.
 */
export interface CertificatesRevocationSettingsState {
    /**
     * Certificate revocation CRL settings. If this attribute is omitted, CRL checks are disabled.
     */
    crlSettings?: pulumi.Input<inputs.CertificatesRevocationSettingsCrlSettings>;
    /**
     * Certificate revocation OCSP settings. If this attribute is omitted, OCSP checks are disabled.
     */
    ocspSettings?: pulumi.Input<inputs.CertificatesRevocationSettingsOcspSettings>;
    /**
     * If OCSP messaging is routed through a proxy server, specify the server's host (DNS name or IP address) and the port
     * number. The same proxy information applies to CRL checking, when CRL is enabled for failover.
     */
    proxySettings?: pulumi.Input<inputs.CertificatesRevocationSettingsProxySettings>;
}

/**
 * The set of arguments for constructing a CertificatesRevocationSettings resource.
 */
export interface CertificatesRevocationSettingsArgs {
    /**
     * Certificate revocation CRL settings. If this attribute is omitted, CRL checks are disabled.
     */
    crlSettings?: pulumi.Input<inputs.CertificatesRevocationSettingsCrlSettings>;
    /**
     * Certificate revocation OCSP settings. If this attribute is omitted, OCSP checks are disabled.
     */
    ocspSettings?: pulumi.Input<inputs.CertificatesRevocationSettingsOcspSettings>;
    /**
     * If OCSP messaging is routed through a proxy server, specify the server's host (DNS name or IP address) and the port
     * number. The same proxy information applies to CRL checking, when CRL is enabled for failover.
     */
    proxySettings?: pulumi.Input<inputs.CertificatesRevocationSettingsProxySettings>;
}
