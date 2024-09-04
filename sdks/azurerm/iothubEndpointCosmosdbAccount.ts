// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IothubEndpointCosmosdbAccount extends pulumi.CustomResource {
    /**
     * Get an existing IothubEndpointCosmosdbAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IothubEndpointCosmosdbAccountState, opts?: pulumi.CustomResourceOptions): IothubEndpointCosmosdbAccount {
        return new IothubEndpointCosmosdbAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/iothubEndpointCosmosdbAccount:IothubEndpointCosmosdbAccount';

    /**
     * Returns true if the given object is an instance of IothubEndpointCosmosdbAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IothubEndpointCosmosdbAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IothubEndpointCosmosdbAccount.__pulumiType;
    }

    public readonly authenticationType!: pulumi.Output<string | undefined>;
    public readonly containerName!: pulumi.Output<string>;
    public readonly databaseName!: pulumi.Output<string>;
    public readonly endpointUri!: pulumi.Output<string>;
    public readonly identityId!: pulumi.Output<string | undefined>;
    public readonly iothubId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly partitionKeyName!: pulumi.Output<string | undefined>;
    public readonly partitionKeyTemplate!: pulumi.Output<string | undefined>;
    public readonly primaryKey!: pulumi.Output<string | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly secondaryKey!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.IothubEndpointCosmosdbAccountTimeouts | undefined>;

    /**
     * Create a IothubEndpointCosmosdbAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IothubEndpointCosmosdbAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IothubEndpointCosmosdbAccountArgs | IothubEndpointCosmosdbAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IothubEndpointCosmosdbAccountState | undefined;
            resourceInputs["authenticationType"] = state ? state.authenticationType : undefined;
            resourceInputs["containerName"] = state ? state.containerName : undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["endpointUri"] = state ? state.endpointUri : undefined;
            resourceInputs["identityId"] = state ? state.identityId : undefined;
            resourceInputs["iothubId"] = state ? state.iothubId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["partitionKeyName"] = state ? state.partitionKeyName : undefined;
            resourceInputs["partitionKeyTemplate"] = state ? state.partitionKeyTemplate : undefined;
            resourceInputs["primaryKey"] = state ? state.primaryKey : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["secondaryKey"] = state ? state.secondaryKey : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IothubEndpointCosmosdbAccountArgs | undefined;
            if ((!args || args.containerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerName'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.endpointUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointUri'");
            }
            if ((!args || args.iothubId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'iothubId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authenticationType"] = args ? args.authenticationType : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["endpointUri"] = args ? args.endpointUri : undefined;
            resourceInputs["identityId"] = args ? args.identityId : undefined;
            resourceInputs["iothubId"] = args ? args.iothubId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["partitionKeyName"] = args ? args.partitionKeyName : undefined;
            resourceInputs["partitionKeyTemplate"] = args ? args.partitionKeyTemplate : undefined;
            resourceInputs["primaryKey"] = args?.primaryKey ? pulumi.secret(args.primaryKey) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secondaryKey"] = args?.secondaryKey ? pulumi.secret(args.secondaryKey) : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["primaryKey", "secondaryKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IothubEndpointCosmosdbAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IothubEndpointCosmosdbAccount resources.
 */
export interface IothubEndpointCosmosdbAccountState {
    authenticationType?: pulumi.Input<string>;
    containerName?: pulumi.Input<string>;
    databaseName?: pulumi.Input<string>;
    endpointUri?: pulumi.Input<string>;
    identityId?: pulumi.Input<string>;
    iothubId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    partitionKeyName?: pulumi.Input<string>;
    partitionKeyTemplate?: pulumi.Input<string>;
    primaryKey?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    secondaryKey?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IothubEndpointCosmosdbAccountTimeouts>;
}

/**
 * The set of arguments for constructing a IothubEndpointCosmosdbAccount resource.
 */
export interface IothubEndpointCosmosdbAccountArgs {
    authenticationType?: pulumi.Input<string>;
    containerName: pulumi.Input<string>;
    databaseName: pulumi.Input<string>;
    endpointUri: pulumi.Input<string>;
    identityId?: pulumi.Input<string>;
    iothubId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    partitionKeyName?: pulumi.Input<string>;
    partitionKeyTemplate?: pulumi.Input<string>;
    primaryKey?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    secondaryKey?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IothubEndpointCosmosdbAccountTimeouts>;
}
