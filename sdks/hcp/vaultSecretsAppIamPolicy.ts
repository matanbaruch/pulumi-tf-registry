// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VaultSecretsAppIamPolicy extends pulumi.CustomResource {
    /**
     * Get an existing VaultSecretsAppIamPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VaultSecretsAppIamPolicyState, opts?: pulumi.CustomResourceOptions): VaultSecretsAppIamPolicy {
        return new VaultSecretsAppIamPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hcp:index/vaultSecretsAppIamPolicy:VaultSecretsAppIamPolicy';

    /**
     * Returns true if the given object is an instance of VaultSecretsAppIamPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VaultSecretsAppIamPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VaultSecretsAppIamPolicy.__pulumiType;
    }

    /**
     * The etag captures the existing state of the policy.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The policy to apply.
     */
    public readonly policyData!: pulumi.Output<string>;
    /**
     * The app's resource name in the format secrets/project/<project ID>/app/<app Name>.
     */
    public readonly resourceName!: pulumi.Output<string>;

    /**
     * Create a VaultSecretsAppIamPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VaultSecretsAppIamPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VaultSecretsAppIamPolicyArgs | VaultSecretsAppIamPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VaultSecretsAppIamPolicyState | undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["policyData"] = state ? state.policyData : undefined;
            resourceInputs["resourceName"] = state ? state.resourceName : undefined;
        } else {
            const args = argsOrState as VaultSecretsAppIamPolicyArgs | undefined;
            if ((!args || args.policyData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyData'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["policyData"] = args ? args.policyData : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VaultSecretsAppIamPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VaultSecretsAppIamPolicy resources.
 */
export interface VaultSecretsAppIamPolicyState {
    /**
     * The etag captures the existing state of the policy.
     */
    etag?: pulumi.Input<string>;
    /**
     * The policy to apply.
     */
    policyData?: pulumi.Input<string>;
    /**
     * The app's resource name in the format secrets/project/<project ID>/app/<app Name>.
     */
    resourceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VaultSecretsAppIamPolicy resource.
 */
export interface VaultSecretsAppIamPolicyArgs {
    /**
     * The policy to apply.
     */
    policyData: pulumi.Input<string>;
    /**
     * The app's resource name in the format secrets/project/<project ID>/app/<app Name>.
     */
    resourceName: pulumi.Input<string>;
}
