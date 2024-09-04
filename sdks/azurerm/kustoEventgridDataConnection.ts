// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KustoEventgridDataConnection extends pulumi.CustomResource {
    /**
     * Get an existing KustoEventgridDataConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KustoEventgridDataConnectionState, opts?: pulumi.CustomResourceOptions): KustoEventgridDataConnection {
        return new KustoEventgridDataConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/kustoEventgridDataConnection:KustoEventgridDataConnection';

    /**
     * Returns true if the given object is an instance of KustoEventgridDataConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KustoEventgridDataConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KustoEventgridDataConnection.__pulumiType;
    }

    public readonly blobStorageEventType!: pulumi.Output<string | undefined>;
    public readonly clusterName!: pulumi.Output<string>;
    public readonly dataFormat!: pulumi.Output<string | undefined>;
    public readonly databaseName!: pulumi.Output<string>;
    public readonly databaseRoutingType!: pulumi.Output<string | undefined>;
    public readonly eventgridResourceId!: pulumi.Output<string | undefined>;
    public readonly eventhubConsumerGroupName!: pulumi.Output<string>;
    public readonly eventhubId!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly managedIdentityResourceId!: pulumi.Output<string | undefined>;
    public readonly mappingRuleName!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly skipFirstRecord!: pulumi.Output<boolean | undefined>;
    public readonly storageAccountId!: pulumi.Output<string>;
    public readonly tableName!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.KustoEventgridDataConnectionTimeouts | undefined>;

    /**
     * Create a KustoEventgridDataConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KustoEventgridDataConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KustoEventgridDataConnectionArgs | KustoEventgridDataConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KustoEventgridDataConnectionState | undefined;
            resourceInputs["blobStorageEventType"] = state ? state.blobStorageEventType : undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["dataFormat"] = state ? state.dataFormat : undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["databaseRoutingType"] = state ? state.databaseRoutingType : undefined;
            resourceInputs["eventgridResourceId"] = state ? state.eventgridResourceId : undefined;
            resourceInputs["eventhubConsumerGroupName"] = state ? state.eventhubConsumerGroupName : undefined;
            resourceInputs["eventhubId"] = state ? state.eventhubId : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["managedIdentityResourceId"] = state ? state.managedIdentityResourceId : undefined;
            resourceInputs["mappingRuleName"] = state ? state.mappingRuleName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["skipFirstRecord"] = state ? state.skipFirstRecord : undefined;
            resourceInputs["storageAccountId"] = state ? state.storageAccountId : undefined;
            resourceInputs["tableName"] = state ? state.tableName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as KustoEventgridDataConnectionArgs | undefined;
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.eventhubConsumerGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventhubConsumerGroupName'");
            }
            if ((!args || args.eventhubId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventhubId'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountId'");
            }
            resourceInputs["blobStorageEventType"] = args ? args.blobStorageEventType : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["dataFormat"] = args ? args.dataFormat : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["databaseRoutingType"] = args ? args.databaseRoutingType : undefined;
            resourceInputs["eventgridResourceId"] = args ? args.eventgridResourceId : undefined;
            resourceInputs["eventhubConsumerGroupName"] = args ? args.eventhubConsumerGroupName : undefined;
            resourceInputs["eventhubId"] = args ? args.eventhubId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedIdentityResourceId"] = args ? args.managedIdentityResourceId : undefined;
            resourceInputs["mappingRuleName"] = args ? args.mappingRuleName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["skipFirstRecord"] = args ? args.skipFirstRecord : undefined;
            resourceInputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KustoEventgridDataConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KustoEventgridDataConnection resources.
 */
export interface KustoEventgridDataConnectionState {
    blobStorageEventType?: pulumi.Input<string>;
    clusterName?: pulumi.Input<string>;
    dataFormat?: pulumi.Input<string>;
    databaseName?: pulumi.Input<string>;
    databaseRoutingType?: pulumi.Input<string>;
    eventgridResourceId?: pulumi.Input<string>;
    eventhubConsumerGroupName?: pulumi.Input<string>;
    eventhubId?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    managedIdentityResourceId?: pulumi.Input<string>;
    mappingRuleName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    skipFirstRecord?: pulumi.Input<boolean>;
    storageAccountId?: pulumi.Input<string>;
    tableName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KustoEventgridDataConnectionTimeouts>;
}

/**
 * The set of arguments for constructing a KustoEventgridDataConnection resource.
 */
export interface KustoEventgridDataConnectionArgs {
    blobStorageEventType?: pulumi.Input<string>;
    clusterName: pulumi.Input<string>;
    dataFormat?: pulumi.Input<string>;
    databaseName: pulumi.Input<string>;
    databaseRoutingType?: pulumi.Input<string>;
    eventgridResourceId?: pulumi.Input<string>;
    eventhubConsumerGroupName: pulumi.Input<string>;
    eventhubId: pulumi.Input<string>;
    location: pulumi.Input<string>;
    managedIdentityResourceId?: pulumi.Input<string>;
    mappingRuleName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    skipFirstRecord?: pulumi.Input<boolean>;
    storageAccountId: pulumi.Input<string>;
    tableName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KustoEventgridDataConnectionTimeouts>;
}
