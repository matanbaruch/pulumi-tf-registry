// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PkiSecretBackendIntermediateSetSigned extends pulumi.CustomResource {
    /**
     * Get an existing PkiSecretBackendIntermediateSetSigned resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PkiSecretBackendIntermediateSetSignedState, opts?: pulumi.CustomResourceOptions): PkiSecretBackendIntermediateSetSigned {
        return new PkiSecretBackendIntermediateSetSigned(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/pkiSecretBackendIntermediateSetSigned:PkiSecretBackendIntermediateSetSigned';

    /**
     * Returns true if the given object is an instance of PkiSecretBackendIntermediateSetSigned.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PkiSecretBackendIntermediateSetSigned {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PkiSecretBackendIntermediateSetSigned.__pulumiType;
    }

    /**
     * The PKI secret backend the resource belongs to.
     */
    public readonly backend!: pulumi.Output<string>;
    /**
     * The certificate.
     */
    public readonly certificate!: pulumi.Output<string>;
    /**
     * The imported issuers.
     */
    public /*out*/ readonly importedIssuers!: pulumi.Output<string[]>;
    /**
     * The imported keys.
     */
    public /*out*/ readonly importedKeys!: pulumi.Output<string[]>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;

    /**
     * Create a PkiSecretBackendIntermediateSetSigned resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PkiSecretBackendIntermediateSetSignedArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PkiSecretBackendIntermediateSetSignedArgs | PkiSecretBackendIntermediateSetSignedState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PkiSecretBackendIntermediateSetSignedState | undefined;
            resourceInputs["backend"] = state ? state.backend : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["importedIssuers"] = state ? state.importedIssuers : undefined;
            resourceInputs["importedKeys"] = state ? state.importedKeys : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
        } else {
            const args = argsOrState as PkiSecretBackendIntermediateSetSignedArgs | undefined;
            if ((!args || args.backend === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backend'");
            }
            if ((!args || args.certificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificate'");
            }
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["importedIssuers"] = undefined /*out*/;
            resourceInputs["importedKeys"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PkiSecretBackendIntermediateSetSigned.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PkiSecretBackendIntermediateSetSigned resources.
 */
export interface PkiSecretBackendIntermediateSetSignedState {
    /**
     * The PKI secret backend the resource belongs to.
     */
    backend?: pulumi.Input<string>;
    /**
     * The certificate.
     */
    certificate?: pulumi.Input<string>;
    /**
     * The imported issuers.
     */
    importedIssuers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The imported keys.
     */
    importedKeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PkiSecretBackendIntermediateSetSigned resource.
 */
export interface PkiSecretBackendIntermediateSetSignedArgs {
    /**
     * The PKI secret backend the resource belongs to.
     */
    backend: pulumi.Input<string>;
    /**
     * The certificate.
     */
    certificate: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
}
