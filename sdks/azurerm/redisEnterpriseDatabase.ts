// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RedisEnterpriseDatabase extends pulumi.CustomResource {
    /**
     * Get an existing RedisEnterpriseDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RedisEnterpriseDatabaseState, opts?: pulumi.CustomResourceOptions): RedisEnterpriseDatabase {
        return new RedisEnterpriseDatabase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/redisEnterpriseDatabase:RedisEnterpriseDatabase';

    /**
     * Returns true if the given object is an instance of RedisEnterpriseDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RedisEnterpriseDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RedisEnterpriseDatabase.__pulumiType;
    }

    public readonly clientProtocol!: pulumi.Output<string | undefined>;
    public readonly clusterId!: pulumi.Output<string>;
    public readonly clusteringPolicy!: pulumi.Output<string | undefined>;
    public readonly evictionPolicy!: pulumi.Output<string | undefined>;
    public readonly linkedDatabaseGroupNickname!: pulumi.Output<string | undefined>;
    public readonly linkedDatabaseIds!: pulumi.Output<string[] | undefined>;
    public readonly modules!: pulumi.Output<outputs.RedisEnterpriseDatabaseModule[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number | undefined>;
    public /*out*/ readonly primaryAccessKey!: pulumi.Output<string>;
    public /*out*/ readonly secondaryAccessKey!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.RedisEnterpriseDatabaseTimeouts | undefined>;

    /**
     * Create a RedisEnterpriseDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RedisEnterpriseDatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RedisEnterpriseDatabaseArgs | RedisEnterpriseDatabaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RedisEnterpriseDatabaseState | undefined;
            resourceInputs["clientProtocol"] = state ? state.clientProtocol : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["clusteringPolicy"] = state ? state.clusteringPolicy : undefined;
            resourceInputs["evictionPolicy"] = state ? state.evictionPolicy : undefined;
            resourceInputs["linkedDatabaseGroupNickname"] = state ? state.linkedDatabaseGroupNickname : undefined;
            resourceInputs["linkedDatabaseIds"] = state ? state.linkedDatabaseIds : undefined;
            resourceInputs["modules"] = state ? state.modules : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["primaryAccessKey"] = state ? state.primaryAccessKey : undefined;
            resourceInputs["secondaryAccessKey"] = state ? state.secondaryAccessKey : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as RedisEnterpriseDatabaseArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            resourceInputs["clientProtocol"] = args ? args.clientProtocol : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["clusteringPolicy"] = args ? args.clusteringPolicy : undefined;
            resourceInputs["evictionPolicy"] = args ? args.evictionPolicy : undefined;
            resourceInputs["linkedDatabaseGroupNickname"] = args ? args.linkedDatabaseGroupNickname : undefined;
            resourceInputs["linkedDatabaseIds"] = args ? args.linkedDatabaseIds : undefined;
            resourceInputs["modules"] = args ? args.modules : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["primaryAccessKey"] = undefined /*out*/;
            resourceInputs["secondaryAccessKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["primaryAccessKey", "secondaryAccessKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(RedisEnterpriseDatabase.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RedisEnterpriseDatabase resources.
 */
export interface RedisEnterpriseDatabaseState {
    clientProtocol?: pulumi.Input<string>;
    clusterId?: pulumi.Input<string>;
    clusteringPolicy?: pulumi.Input<string>;
    evictionPolicy?: pulumi.Input<string>;
    linkedDatabaseGroupNickname?: pulumi.Input<string>;
    linkedDatabaseIds?: pulumi.Input<pulumi.Input<string>[]>;
    modules?: pulumi.Input<pulumi.Input<inputs.RedisEnterpriseDatabaseModule>[]>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    primaryAccessKey?: pulumi.Input<string>;
    secondaryAccessKey?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.RedisEnterpriseDatabaseTimeouts>;
}

/**
 * The set of arguments for constructing a RedisEnterpriseDatabase resource.
 */
export interface RedisEnterpriseDatabaseArgs {
    clientProtocol?: pulumi.Input<string>;
    clusterId: pulumi.Input<string>;
    clusteringPolicy?: pulumi.Input<string>;
    evictionPolicy?: pulumi.Input<string>;
    linkedDatabaseGroupNickname?: pulumi.Input<string>;
    linkedDatabaseIds?: pulumi.Input<pulumi.Input<string>[]>;
    modules?: pulumi.Input<pulumi.Input<inputs.RedisEnterpriseDatabaseModule>[]>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.RedisEnterpriseDatabaseTimeouts>;
}
