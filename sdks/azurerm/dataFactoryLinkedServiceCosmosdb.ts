// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataFactoryLinkedServiceCosmosdb extends pulumi.CustomResource {
    /**
     * Get an existing DataFactoryLinkedServiceCosmosdb resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataFactoryLinkedServiceCosmosdbState, opts?: pulumi.CustomResourceOptions): DataFactoryLinkedServiceCosmosdb {
        return new DataFactoryLinkedServiceCosmosdb(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/dataFactoryLinkedServiceCosmosdb:DataFactoryLinkedServiceCosmosdb';

    /**
     * Returns true if the given object is an instance of DataFactoryLinkedServiceCosmosdb.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataFactoryLinkedServiceCosmosdb {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataFactoryLinkedServiceCosmosdb.__pulumiType;
    }

    public readonly accountEndpoint!: pulumi.Output<string | undefined>;
    public readonly accountKey!: pulumi.Output<string | undefined>;
    public readonly additionalProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly annotations!: pulumi.Output<string[] | undefined>;
    public readonly connectionString!: pulumi.Output<string | undefined>;
    public readonly dataFactoryId!: pulumi.Output<string>;
    public readonly database!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly integrationRuntimeName!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DataFactoryLinkedServiceCosmosdbTimeouts | undefined>;

    /**
     * Create a DataFactoryLinkedServiceCosmosdb resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataFactoryLinkedServiceCosmosdbArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataFactoryLinkedServiceCosmosdbArgs | DataFactoryLinkedServiceCosmosdbState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataFactoryLinkedServiceCosmosdbState | undefined;
            resourceInputs["accountEndpoint"] = state ? state.accountEndpoint : undefined;
            resourceInputs["accountKey"] = state ? state.accountKey : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["connectionString"] = state ? state.connectionString : undefined;
            resourceInputs["dataFactoryId"] = state ? state.dataFactoryId : undefined;
            resourceInputs["database"] = state ? state.database : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["integrationRuntimeName"] = state ? state.integrationRuntimeName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DataFactoryLinkedServiceCosmosdbArgs | undefined;
            if ((!args || args.dataFactoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataFactoryId'");
            }
            resourceInputs["accountEndpoint"] = args ? args.accountEndpoint : undefined;
            resourceInputs["accountKey"] = args?.accountKey ? pulumi.secret(args.accountKey) : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["connectionString"] = args?.connectionString ? pulumi.secret(args.connectionString) : undefined;
            resourceInputs["dataFactoryId"] = args ? args.dataFactoryId : undefined;
            resourceInputs["database"] = args ? args.database : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["integrationRuntimeName"] = args ? args.integrationRuntimeName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accountKey", "connectionString"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DataFactoryLinkedServiceCosmosdb.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataFactoryLinkedServiceCosmosdb resources.
 */
export interface DataFactoryLinkedServiceCosmosdbState {
    accountEndpoint?: pulumi.Input<string>;
    accountKey?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    connectionString?: pulumi.Input<string>;
    dataFactoryId?: pulumi.Input<string>;
    database?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    integrationRuntimeName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DataFactoryLinkedServiceCosmosdbTimeouts>;
}

/**
 * The set of arguments for constructing a DataFactoryLinkedServiceCosmosdb resource.
 */
export interface DataFactoryLinkedServiceCosmosdbArgs {
    accountEndpoint?: pulumi.Input<string>;
    accountKey?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    connectionString?: pulumi.Input<string>;
    dataFactoryId: pulumi.Input<string>;
    database?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    integrationRuntimeName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DataFactoryLinkedServiceCosmosdbTimeouts>;
}
