// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DirectoryServiceLogSubscription extends pulumi.CustomResource {
    /**
     * Get an existing DirectoryServiceLogSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DirectoryServiceLogSubscriptionState, opts?: pulumi.CustomResourceOptions): DirectoryServiceLogSubscription {
        return new DirectoryServiceLogSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/directoryServiceLogSubscription:DirectoryServiceLogSubscription';

    /**
     * Returns true if the given object is an instance of DirectoryServiceLogSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DirectoryServiceLogSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DirectoryServiceLogSubscription.__pulumiType;
    }

    public readonly directoryId!: pulumi.Output<string>;
    public readonly logGroupName!: pulumi.Output<string>;

    /**
     * Create a DirectoryServiceLogSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DirectoryServiceLogSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DirectoryServiceLogSubscriptionArgs | DirectoryServiceLogSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DirectoryServiceLogSubscriptionState | undefined;
            resourceInputs["directoryId"] = state ? state.directoryId : undefined;
            resourceInputs["logGroupName"] = state ? state.logGroupName : undefined;
        } else {
            const args = argsOrState as DirectoryServiceLogSubscriptionArgs | undefined;
            if ((!args || args.directoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'directoryId'");
            }
            if ((!args || args.logGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'logGroupName'");
            }
            resourceInputs["directoryId"] = args ? args.directoryId : undefined;
            resourceInputs["logGroupName"] = args ? args.logGroupName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DirectoryServiceLogSubscription.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DirectoryServiceLogSubscription resources.
 */
export interface DirectoryServiceLogSubscriptionState {
    directoryId?: pulumi.Input<string>;
    logGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DirectoryServiceLogSubscription resource.
 */
export interface DirectoryServiceLogSubscriptionArgs {
    directoryId: pulumi.Input<string>;
    logGroupName: pulumi.Input<string>;
}
