// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudproviderGcp extends pulumi.CustomResource {
    /**
     * Get an existing CloudproviderGcp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudproviderGcpState, opts?: pulumi.CustomResourceOptions): CloudproviderGcp {
        return new CloudproviderGcp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'harness:index/cloudproviderGcp:CloudproviderGcp';

    /**
     * Returns true if the given object is an instance of CloudproviderGcp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudproviderGcp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudproviderGcp.__pulumiType;
    }

    /**
     * Delegate selectors to use for this provider.
     */
    public readonly delegateSelectors!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the cloud provider.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The id of the secret containing the GCP credentials
     */
    public readonly secretFileId!: pulumi.Output<string | undefined>;
    /**
     * Skip validation of GCP configuration.
     */
    public readonly skipValidation!: pulumi.Output<boolean | undefined>;
    /**
     * This block is used for scoping the resource to a specific set of applications or environments.
     */
    public readonly usageScopes!: pulumi.Output<outputs.CloudproviderGcpUsageScope[] | undefined>;

    /**
     * Create a CloudproviderGcp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CloudproviderGcpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudproviderGcpArgs | CloudproviderGcpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudproviderGcpState | undefined;
            resourceInputs["delegateSelectors"] = state ? state.delegateSelectors : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["secretFileId"] = state ? state.secretFileId : undefined;
            resourceInputs["skipValidation"] = state ? state.skipValidation : undefined;
            resourceInputs["usageScopes"] = state ? state.usageScopes : undefined;
        } else {
            const args = argsOrState as CloudproviderGcpArgs | undefined;
            resourceInputs["delegateSelectors"] = args ? args.delegateSelectors : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["secretFileId"] = args ? args.secretFileId : undefined;
            resourceInputs["skipValidation"] = args ? args.skipValidation : undefined;
            resourceInputs["usageScopes"] = args ? args.usageScopes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudproviderGcp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudproviderGcp resources.
 */
export interface CloudproviderGcpState {
    /**
     * Delegate selectors to use for this provider.
     */
    delegateSelectors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the cloud provider.
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the secret containing the GCP credentials
     */
    secretFileId?: pulumi.Input<string>;
    /**
     * Skip validation of GCP configuration.
     */
    skipValidation?: pulumi.Input<boolean>;
    /**
     * This block is used for scoping the resource to a specific set of applications or environments.
     */
    usageScopes?: pulumi.Input<pulumi.Input<inputs.CloudproviderGcpUsageScope>[]>;
}

/**
 * The set of arguments for constructing a CloudproviderGcp resource.
 */
export interface CloudproviderGcpArgs {
    /**
     * Delegate selectors to use for this provider.
     */
    delegateSelectors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the cloud provider.
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the secret containing the GCP credentials
     */
    secretFileId?: pulumi.Input<string>;
    /**
     * Skip validation of GCP configuration.
     */
    skipValidation?: pulumi.Input<boolean>;
    /**
     * This block is used for scoping the resource to a specific set of applications or environments.
     */
    usageScopes?: pulumi.Input<pulumi.Input<inputs.CloudproviderGcpUsageScope>[]>;
}
