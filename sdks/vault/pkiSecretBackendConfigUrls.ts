// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PkiSecretBackendConfigUrls extends pulumi.CustomResource {
    /**
     * Get an existing PkiSecretBackendConfigUrls resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PkiSecretBackendConfigUrlsState, opts?: pulumi.CustomResourceOptions): PkiSecretBackendConfigUrls {
        return new PkiSecretBackendConfigUrls(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/pkiSecretBackendConfigUrls:PkiSecretBackendConfigUrls';

    /**
     * Returns true if the given object is an instance of PkiSecretBackendConfigUrls.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PkiSecretBackendConfigUrls {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PkiSecretBackendConfigUrls.__pulumiType;
    }

    /**
     * The path of the PKI secret backend the resource belongs to.
     */
    public readonly backend!: pulumi.Output<string>;
    /**
     * Specifies the URL values for the CRL Distribution Points field.
     */
    public readonly crlDistributionPoints!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies that templating of AIA fields is allowed.
     */
    public readonly enableTemplating!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the URL values for the Issuing Certificate field.
     */
    public readonly issuingCertificates!: pulumi.Output<string[] | undefined>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Specifies the URL values for the OCSP Servers field.
     */
    public readonly ocspServers!: pulumi.Output<string[] | undefined>;

    /**
     * Create a PkiSecretBackendConfigUrls resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PkiSecretBackendConfigUrlsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PkiSecretBackendConfigUrlsArgs | PkiSecretBackendConfigUrlsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PkiSecretBackendConfigUrlsState | undefined;
            resourceInputs["backend"] = state ? state.backend : undefined;
            resourceInputs["crlDistributionPoints"] = state ? state.crlDistributionPoints : undefined;
            resourceInputs["enableTemplating"] = state ? state.enableTemplating : undefined;
            resourceInputs["issuingCertificates"] = state ? state.issuingCertificates : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["ocspServers"] = state ? state.ocspServers : undefined;
        } else {
            const args = argsOrState as PkiSecretBackendConfigUrlsArgs | undefined;
            if ((!args || args.backend === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backend'");
            }
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["crlDistributionPoints"] = args ? args.crlDistributionPoints : undefined;
            resourceInputs["enableTemplating"] = args ? args.enableTemplating : undefined;
            resourceInputs["issuingCertificates"] = args ? args.issuingCertificates : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["ocspServers"] = args ? args.ocspServers : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PkiSecretBackendConfigUrls.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PkiSecretBackendConfigUrls resources.
 */
export interface PkiSecretBackendConfigUrlsState {
    /**
     * The path of the PKI secret backend the resource belongs to.
     */
    backend?: pulumi.Input<string>;
    /**
     * Specifies the URL values for the CRL Distribution Points field.
     */
    crlDistributionPoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies that templating of AIA fields is allowed.
     */
    enableTemplating?: pulumi.Input<boolean>;
    /**
     * Specifies the URL values for the Issuing Certificate field.
     */
    issuingCertificates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Specifies the URL values for the OCSP Servers field.
     */
    ocspServers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a PkiSecretBackendConfigUrls resource.
 */
export interface PkiSecretBackendConfigUrlsArgs {
    /**
     * The path of the PKI secret backend the resource belongs to.
     */
    backend: pulumi.Input<string>;
    /**
     * Specifies the URL values for the CRL Distribution Points field.
     */
    crlDistributionPoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies that templating of AIA fields is allowed.
     */
    enableTemplating?: pulumi.Input<boolean>;
    /**
     * Specifies the URL values for the Issuing Certificate field.
     */
    issuingCertificates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Specifies the URL values for the OCSP Servers field.
     */
    ocspServers?: pulumi.Input<pulumi.Input<string>[]>;
}
