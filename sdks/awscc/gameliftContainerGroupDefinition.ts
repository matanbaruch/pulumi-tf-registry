// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GameliftContainerGroupDefinition extends pulumi.CustomResource {
    /**
     * Get an existing GameliftContainerGroupDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GameliftContainerGroupDefinitionState, opts?: pulumi.CustomResourceOptions): GameliftContainerGroupDefinition {
        return new GameliftContainerGroupDefinition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/gameliftContainerGroupDefinition:GameliftContainerGroupDefinition';

    /**
     * Returns true if the given object is an instance of GameliftContainerGroupDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GameliftContainerGroupDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GameliftContainerGroupDefinition.__pulumiType;
    }

    /**
     * A collection of container definitions that define the containers in this group.
     */
    public readonly containerDefinitions!: pulumi.Output<outputs.GameliftContainerGroupDefinitionContainerDefinition[]>;
    /**
     * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container group resource and uniquely identifies it
     * across all AWS Regions.
     */
    public /*out*/ readonly containerGroupDefinitionArn!: pulumi.Output<string>;
    /**
     * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds
     * (for example "1469498468.057").
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * A descriptive label for the container group definition.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The operating system of the container group
     */
    public readonly operatingSystem!: pulumi.Output<string>;
    /**
     * Specifies whether the container group includes replica or daemon containers.
     */
    public readonly schedulingStrategy!: pulumi.Output<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.GameliftContainerGroupDefinitionTag[]>;
    /**
     * The maximum number of CPU units reserved for this container group. The value is expressed as an integer amount of CPU
     * units. (1 vCPU is equal to 1024 CPU units.)
     */
    public readonly totalCpuLimit!: pulumi.Output<number>;
    /**
     * The maximum amount of memory (in MiB) to allocate for this container group.
     */
    public readonly totalMemoryLimit!: pulumi.Output<number>;

    /**
     * Create a GameliftContainerGroupDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GameliftContainerGroupDefinitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GameliftContainerGroupDefinitionArgs | GameliftContainerGroupDefinitionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GameliftContainerGroupDefinitionState | undefined;
            resourceInputs["containerDefinitions"] = state ? state.containerDefinitions : undefined;
            resourceInputs["containerGroupDefinitionArn"] = state ? state.containerGroupDefinitionArn : undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["operatingSystem"] = state ? state.operatingSystem : undefined;
            resourceInputs["schedulingStrategy"] = state ? state.schedulingStrategy : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["totalCpuLimit"] = state ? state.totalCpuLimit : undefined;
            resourceInputs["totalMemoryLimit"] = state ? state.totalMemoryLimit : undefined;
        } else {
            const args = argsOrState as GameliftContainerGroupDefinitionArgs | undefined;
            if ((!args || args.containerDefinitions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerDefinitions'");
            }
            if ((!args || args.operatingSystem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operatingSystem'");
            }
            if ((!args || args.totalCpuLimit === undefined) && !opts.urn) {
                throw new Error("Missing required property 'totalCpuLimit'");
            }
            if ((!args || args.totalMemoryLimit === undefined) && !opts.urn) {
                throw new Error("Missing required property 'totalMemoryLimit'");
            }
            resourceInputs["containerDefinitions"] = args ? args.containerDefinitions : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["operatingSystem"] = args ? args.operatingSystem : undefined;
            resourceInputs["schedulingStrategy"] = args ? args.schedulingStrategy : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["totalCpuLimit"] = args ? args.totalCpuLimit : undefined;
            resourceInputs["totalMemoryLimit"] = args ? args.totalMemoryLimit : undefined;
            resourceInputs["containerGroupDefinitionArn"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GameliftContainerGroupDefinition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GameliftContainerGroupDefinition resources.
 */
export interface GameliftContainerGroupDefinitionState {
    /**
     * A collection of container definitions that define the containers in this group.
     */
    containerDefinitions?: pulumi.Input<pulumi.Input<inputs.GameliftContainerGroupDefinitionContainerDefinition>[]>;
    /**
     * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container group resource and uniquely identifies it
     * across all AWS Regions.
     */
    containerGroupDefinitionArn?: pulumi.Input<string>;
    /**
     * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds
     * (for example "1469498468.057").
     */
    creationTime?: pulumi.Input<string>;
    /**
     * A descriptive label for the container group definition.
     */
    name?: pulumi.Input<string>;
    /**
     * The operating system of the container group
     */
    operatingSystem?: pulumi.Input<string>;
    /**
     * Specifies whether the container group includes replica or daemon containers.
     */
    schedulingStrategy?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.GameliftContainerGroupDefinitionTag>[]>;
    /**
     * The maximum number of CPU units reserved for this container group. The value is expressed as an integer amount of CPU
     * units. (1 vCPU is equal to 1024 CPU units.)
     */
    totalCpuLimit?: pulumi.Input<number>;
    /**
     * The maximum amount of memory (in MiB) to allocate for this container group.
     */
    totalMemoryLimit?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a GameliftContainerGroupDefinition resource.
 */
export interface GameliftContainerGroupDefinitionArgs {
    /**
     * A collection of container definitions that define the containers in this group.
     */
    containerDefinitions: pulumi.Input<pulumi.Input<inputs.GameliftContainerGroupDefinitionContainerDefinition>[]>;
    /**
     * A descriptive label for the container group definition.
     */
    name?: pulumi.Input<string>;
    /**
     * The operating system of the container group
     */
    operatingSystem: pulumi.Input<string>;
    /**
     * Specifies whether the container group includes replica or daemon containers.
     */
    schedulingStrategy?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.GameliftContainerGroupDefinitionTag>[]>;
    /**
     * The maximum number of CPU units reserved for this container group. The value is expressed as an integer amount of CPU
     * units. (1 vCPU is equal to 1024 CPU units.)
     */
    totalCpuLimit: pulumi.Input<number>;
    /**
     * The maximum amount of memory (in MiB) to allocate for this container group.
     */
    totalMemoryLimit: pulumi.Input<number>;
}
