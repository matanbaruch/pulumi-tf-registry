// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ClientCertAuthorityOcspTlsTrustedCommonName extends pulumi.CustomResource {
    /**
     * Get an existing ClientCertAuthorityOcspTlsTrustedCommonName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClientCertAuthorityOcspTlsTrustedCommonNameState, opts?: pulumi.CustomResourceOptions): ClientCertAuthorityOcspTlsTrustedCommonName {
        return new ClientCertAuthorityOcspTlsTrustedCommonName(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/clientCertAuthorityOcspTlsTrustedCommonName:ClientCertAuthorityOcspTlsTrustedCommonName';

    /**
     * Returns true if the given object is an instance of ClientCertAuthorityOcspTlsTrustedCommonName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClientCertAuthorityOcspTlsTrustedCommonName {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClientCertAuthorityOcspTlsTrustedCommonName.__pulumiType;
    }

    /**
     * The name of the Certificate Authority.
     */
    public readonly certAuthorityName!: pulumi.Output<string>;
    /**
     * The expected Trusted Common Name of the OCSP responder remote certificate.
     */
    public readonly ocspTlsTrustedCommonName!: pulumi.Output<string>;

    /**
     * Create a ClientCertAuthorityOcspTlsTrustedCommonName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClientCertAuthorityOcspTlsTrustedCommonNameArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClientCertAuthorityOcspTlsTrustedCommonNameArgs | ClientCertAuthorityOcspTlsTrustedCommonNameState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClientCertAuthorityOcspTlsTrustedCommonNameState | undefined;
            resourceInputs["certAuthorityName"] = state ? state.certAuthorityName : undefined;
            resourceInputs["ocspTlsTrustedCommonName"] = state ? state.ocspTlsTrustedCommonName : undefined;
        } else {
            const args = argsOrState as ClientCertAuthorityOcspTlsTrustedCommonNameArgs | undefined;
            if ((!args || args.certAuthorityName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certAuthorityName'");
            }
            if ((!args || args.ocspTlsTrustedCommonName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ocspTlsTrustedCommonName'");
            }
            resourceInputs["certAuthorityName"] = args ? args.certAuthorityName : undefined;
            resourceInputs["ocspTlsTrustedCommonName"] = args ? args.ocspTlsTrustedCommonName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClientCertAuthorityOcspTlsTrustedCommonName.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClientCertAuthorityOcspTlsTrustedCommonName resources.
 */
export interface ClientCertAuthorityOcspTlsTrustedCommonNameState {
    /**
     * The name of the Certificate Authority.
     */
    certAuthorityName?: pulumi.Input<string>;
    /**
     * The expected Trusted Common Name of the OCSP responder remote certificate.
     */
    ocspTlsTrustedCommonName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClientCertAuthorityOcspTlsTrustedCommonName resource.
 */
export interface ClientCertAuthorityOcspTlsTrustedCommonNameArgs {
    /**
     * The name of the Certificate Authority.
     */
    certAuthorityName: pulumi.Input<string>;
    /**
     * The expected Trusted Common Name of the OCSP responder remote certificate.
     */
    ocspTlsTrustedCommonName: pulumi.Input<string>;
}
