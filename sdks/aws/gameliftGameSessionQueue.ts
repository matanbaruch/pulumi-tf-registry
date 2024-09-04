// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GameliftGameSessionQueue extends pulumi.CustomResource {
    /**
     * Get an existing GameliftGameSessionQueue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GameliftGameSessionQueueState, opts?: pulumi.CustomResourceOptions): GameliftGameSessionQueue {
        return new GameliftGameSessionQueue(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/gameliftGameSessionQueue:GameliftGameSessionQueue';

    /**
     * Returns true if the given object is an instance of GameliftGameSessionQueue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GameliftGameSessionQueue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GameliftGameSessionQueue.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly customEventData!: pulumi.Output<string | undefined>;
    public readonly destinations!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly notificationTarget!: pulumi.Output<string | undefined>;
    public readonly playerLatencyPolicies!: pulumi.Output<outputs.GameliftGameSessionQueuePlayerLatencyPolicy[] | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeoutInSeconds!: pulumi.Output<number | undefined>;

    /**
     * Create a GameliftGameSessionQueue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GameliftGameSessionQueueArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GameliftGameSessionQueueArgs | GameliftGameSessionQueueState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GameliftGameSessionQueueState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["customEventData"] = state ? state.customEventData : undefined;
            resourceInputs["destinations"] = state ? state.destinations : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notificationTarget"] = state ? state.notificationTarget : undefined;
            resourceInputs["playerLatencyPolicies"] = state ? state.playerLatencyPolicies : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeoutInSeconds"] = state ? state.timeoutInSeconds : undefined;
        } else {
            const args = argsOrState as GameliftGameSessionQueueArgs | undefined;
            resourceInputs["customEventData"] = args ? args.customEventData : undefined;
            resourceInputs["destinations"] = args ? args.destinations : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notificationTarget"] = args ? args.notificationTarget : undefined;
            resourceInputs["playerLatencyPolicies"] = args ? args.playerLatencyPolicies : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeoutInSeconds"] = args ? args.timeoutInSeconds : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GameliftGameSessionQueue.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GameliftGameSessionQueue resources.
 */
export interface GameliftGameSessionQueueState {
    arn?: pulumi.Input<string>;
    customEventData?: pulumi.Input<string>;
    destinations?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    notificationTarget?: pulumi.Input<string>;
    playerLatencyPolicies?: pulumi.Input<pulumi.Input<inputs.GameliftGameSessionQueuePlayerLatencyPolicy>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeoutInSeconds?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a GameliftGameSessionQueue resource.
 */
export interface GameliftGameSessionQueueArgs {
    customEventData?: pulumi.Input<string>;
    destinations?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    notificationTarget?: pulumi.Input<string>;
    playerLatencyPolicies?: pulumi.Input<pulumi.Input<inputs.GameliftGameSessionQueuePlayerLatencyPolicy>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeoutInSeconds?: pulumi.Input<number>;
}
