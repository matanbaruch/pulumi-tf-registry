// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IothubSharedAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing IothubSharedAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IothubSharedAccessPolicyState, opts?: pulumi.CustomResourceOptions): IothubSharedAccessPolicy {
        return new IothubSharedAccessPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/iothubSharedAccessPolicy:IothubSharedAccessPolicy';

    /**
     * Returns true if the given object is an instance of IothubSharedAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IothubSharedAccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IothubSharedAccessPolicy.__pulumiType;
    }

    public readonly deviceConnect!: pulumi.Output<boolean | undefined>;
    public readonly iothubName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly primaryConnectionString!: pulumi.Output<string>;
    public /*out*/ readonly primaryKey!: pulumi.Output<string>;
    public readonly registryRead!: pulumi.Output<boolean | undefined>;
    public readonly registryWrite!: pulumi.Output<boolean | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public /*out*/ readonly secondaryConnectionString!: pulumi.Output<string>;
    public /*out*/ readonly secondaryKey!: pulumi.Output<string>;
    public readonly serviceConnect!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.IothubSharedAccessPolicyTimeouts | undefined>;

    /**
     * Create a IothubSharedAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IothubSharedAccessPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IothubSharedAccessPolicyArgs | IothubSharedAccessPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IothubSharedAccessPolicyState | undefined;
            resourceInputs["deviceConnect"] = state ? state.deviceConnect : undefined;
            resourceInputs["iothubName"] = state ? state.iothubName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["primaryConnectionString"] = state ? state.primaryConnectionString : undefined;
            resourceInputs["primaryKey"] = state ? state.primaryKey : undefined;
            resourceInputs["registryRead"] = state ? state.registryRead : undefined;
            resourceInputs["registryWrite"] = state ? state.registryWrite : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["secondaryConnectionString"] = state ? state.secondaryConnectionString : undefined;
            resourceInputs["secondaryKey"] = state ? state.secondaryKey : undefined;
            resourceInputs["serviceConnect"] = state ? state.serviceConnect : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IothubSharedAccessPolicyArgs | undefined;
            if ((!args || args.iothubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'iothubName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["deviceConnect"] = args ? args.deviceConnect : undefined;
            resourceInputs["iothubName"] = args ? args.iothubName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["registryRead"] = args ? args.registryRead : undefined;
            resourceInputs["registryWrite"] = args ? args.registryWrite : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceConnect"] = args ? args.serviceConnect : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["primaryConnectionString"] = undefined /*out*/;
            resourceInputs["primaryKey"] = undefined /*out*/;
            resourceInputs["secondaryConnectionString"] = undefined /*out*/;
            resourceInputs["secondaryKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["primaryConnectionString", "primaryKey", "secondaryConnectionString", "secondaryKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IothubSharedAccessPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IothubSharedAccessPolicy resources.
 */
export interface IothubSharedAccessPolicyState {
    deviceConnect?: pulumi.Input<boolean>;
    iothubName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    primaryConnectionString?: pulumi.Input<string>;
    primaryKey?: pulumi.Input<string>;
    registryRead?: pulumi.Input<boolean>;
    registryWrite?: pulumi.Input<boolean>;
    resourceGroupName?: pulumi.Input<string>;
    secondaryConnectionString?: pulumi.Input<string>;
    secondaryKey?: pulumi.Input<string>;
    serviceConnect?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.IothubSharedAccessPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a IothubSharedAccessPolicy resource.
 */
export interface IothubSharedAccessPolicyArgs {
    deviceConnect?: pulumi.Input<boolean>;
    iothubName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    registryRead?: pulumi.Input<boolean>;
    registryWrite?: pulumi.Input<boolean>;
    resourceGroupName: pulumi.Input<string>;
    serviceConnect?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.IothubSharedAccessPolicyTimeouts>;
}
