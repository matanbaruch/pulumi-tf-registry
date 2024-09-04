// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BotChannelAlexa extends pulumi.CustomResource {
    /**
     * Get an existing BotChannelAlexa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BotChannelAlexaState, opts?: pulumi.CustomResourceOptions): BotChannelAlexa {
        return new BotChannelAlexa(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/botChannelAlexa:BotChannelAlexa';

    /**
     * Returns true if the given object is an instance of BotChannelAlexa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BotChannelAlexa {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BotChannelAlexa.__pulumiType;
    }

    public readonly botName!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly skillId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BotChannelAlexaTimeouts | undefined>;

    /**
     * Create a BotChannelAlexa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BotChannelAlexaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BotChannelAlexaArgs | BotChannelAlexaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BotChannelAlexaState | undefined;
            resourceInputs["botName"] = state ? state.botName : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["skillId"] = state ? state.skillId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BotChannelAlexaArgs | undefined;
            if ((!args || args.botName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'botName'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.skillId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'skillId'");
            }
            resourceInputs["botName"] = args ? args.botName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["skillId"] = args ? args.skillId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BotChannelAlexa.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BotChannelAlexa resources.
 */
export interface BotChannelAlexaState {
    botName?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    skillId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BotChannelAlexaTimeouts>;
}

/**
 * The set of arguments for constructing a BotChannelAlexa resource.
 */
export interface BotChannelAlexaArgs {
    botName: pulumi.Input<string>;
    location: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    skillId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BotChannelAlexaTimeouts>;
}
