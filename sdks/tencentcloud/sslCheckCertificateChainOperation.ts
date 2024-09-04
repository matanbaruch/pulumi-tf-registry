// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SslCheckCertificateChainOperation extends pulumi.CustomResource {
    /**
     * Get an existing SslCheckCertificateChainOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SslCheckCertificateChainOperationState, opts?: pulumi.CustomResourceOptions): SslCheckCertificateChainOperation {
        return new SslCheckCertificateChainOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/sslCheckCertificateChainOperation:SslCheckCertificateChainOperation';

    /**
     * Returns true if the given object is an instance of SslCheckCertificateChainOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SslCheckCertificateChainOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SslCheckCertificateChainOperation.__pulumiType;
    }

    /**
     * The certificate chain to check.
     */
    public readonly certificateChain!: pulumi.Output<string>;

    /**
     * Create a SslCheckCertificateChainOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SslCheckCertificateChainOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SslCheckCertificateChainOperationArgs | SslCheckCertificateChainOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SslCheckCertificateChainOperationState | undefined;
            resourceInputs["certificateChain"] = state ? state.certificateChain : undefined;
        } else {
            const args = argsOrState as SslCheckCertificateChainOperationArgs | undefined;
            if ((!args || args.certificateChain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateChain'");
            }
            resourceInputs["certificateChain"] = args ? args.certificateChain : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SslCheckCertificateChainOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SslCheckCertificateChainOperation resources.
 */
export interface SslCheckCertificateChainOperationState {
    /**
     * The certificate chain to check.
     */
    certificateChain?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SslCheckCertificateChainOperation resource.
 */
export interface SslCheckCertificateChainOperationArgs {
    /**
     * The certificate chain to check.
     */
    certificateChain: pulumi.Input<string>;
}
