// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SpringCloudAppRedisAssociation extends pulumi.CustomResource {
    /**
     * Get an existing SpringCloudAppRedisAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpringCloudAppRedisAssociationState, opts?: pulumi.CustomResourceOptions): SpringCloudAppRedisAssociation {
        return new SpringCloudAppRedisAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/springCloudAppRedisAssociation:SpringCloudAppRedisAssociation';

    /**
     * Returns true if the given object is an instance of SpringCloudAppRedisAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SpringCloudAppRedisAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SpringCloudAppRedisAssociation.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;
    public readonly redisAccessKey!: pulumi.Output<string>;
    public readonly redisCacheId!: pulumi.Output<string>;
    public readonly springCloudAppId!: pulumi.Output<string>;
    public readonly sslEnabled!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SpringCloudAppRedisAssociationTimeouts | undefined>;

    /**
     * Create a SpringCloudAppRedisAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringCloudAppRedisAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SpringCloudAppRedisAssociationArgs | SpringCloudAppRedisAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SpringCloudAppRedisAssociationState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["redisAccessKey"] = state ? state.redisAccessKey : undefined;
            resourceInputs["redisCacheId"] = state ? state.redisCacheId : undefined;
            resourceInputs["springCloudAppId"] = state ? state.springCloudAppId : undefined;
            resourceInputs["sslEnabled"] = state ? state.sslEnabled : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SpringCloudAppRedisAssociationArgs | undefined;
            if ((!args || args.redisAccessKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'redisAccessKey'");
            }
            if ((!args || args.redisCacheId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'redisCacheId'");
            }
            if ((!args || args.springCloudAppId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'springCloudAppId'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["redisAccessKey"] = args ? args.redisAccessKey : undefined;
            resourceInputs["redisCacheId"] = args ? args.redisCacheId : undefined;
            resourceInputs["springCloudAppId"] = args ? args.springCloudAppId : undefined;
            resourceInputs["sslEnabled"] = args ? args.sslEnabled : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SpringCloudAppRedisAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SpringCloudAppRedisAssociation resources.
 */
export interface SpringCloudAppRedisAssociationState {
    name?: pulumi.Input<string>;
    redisAccessKey?: pulumi.Input<string>;
    redisCacheId?: pulumi.Input<string>;
    springCloudAppId?: pulumi.Input<string>;
    sslEnabled?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.SpringCloudAppRedisAssociationTimeouts>;
}

/**
 * The set of arguments for constructing a SpringCloudAppRedisAssociation resource.
 */
export interface SpringCloudAppRedisAssociationArgs {
    name?: pulumi.Input<string>;
    redisAccessKey: pulumi.Input<string>;
    redisCacheId: pulumi.Input<string>;
    springCloudAppId: pulumi.Input<string>;
    sslEnabled?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.SpringCloudAppRedisAssociationTimeouts>;
}
