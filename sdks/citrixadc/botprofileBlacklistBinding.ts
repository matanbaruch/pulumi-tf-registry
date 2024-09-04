// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BotprofileBlacklistBinding extends pulumi.CustomResource {
    /**
     * Get an existing BotprofileBlacklistBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BotprofileBlacklistBindingState, opts?: pulumi.CustomResourceOptions): BotprofileBlacklistBinding {
        return new BotprofileBlacklistBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/botprofileBlacklistBinding:BotprofileBlacklistBinding';

    /**
     * Returns true if the given object is an instance of BotprofileBlacklistBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BotprofileBlacklistBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BotprofileBlacklistBinding.__pulumiType;
    }

    public readonly botBindComment!: pulumi.Output<string>;
    public readonly botBlacklist!: pulumi.Output<boolean>;
    public readonly botBlacklistActions!: pulumi.Output<string[]>;
    public readonly botBlacklistEnabled!: pulumi.Output<string>;
    public readonly botBlacklistType!: pulumi.Output<string>;
    public readonly botBlacklistValue!: pulumi.Output<string>;
    public readonly logmessage!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a BotprofileBlacklistBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BotprofileBlacklistBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BotprofileBlacklistBindingArgs | BotprofileBlacklistBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BotprofileBlacklistBindingState | undefined;
            resourceInputs["botBindComment"] = state ? state.botBindComment : undefined;
            resourceInputs["botBlacklist"] = state ? state.botBlacklist : undefined;
            resourceInputs["botBlacklistActions"] = state ? state.botBlacklistActions : undefined;
            resourceInputs["botBlacklistEnabled"] = state ? state.botBlacklistEnabled : undefined;
            resourceInputs["botBlacklistType"] = state ? state.botBlacklistType : undefined;
            resourceInputs["botBlacklistValue"] = state ? state.botBlacklistValue : undefined;
            resourceInputs["logmessage"] = state ? state.logmessage : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as BotprofileBlacklistBindingArgs | undefined;
            if ((!args || args.botBlacklistValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'botBlacklistValue'");
            }
            resourceInputs["botBindComment"] = args ? args.botBindComment : undefined;
            resourceInputs["botBlacklist"] = args ? args.botBlacklist : undefined;
            resourceInputs["botBlacklistActions"] = args ? args.botBlacklistActions : undefined;
            resourceInputs["botBlacklistEnabled"] = args ? args.botBlacklistEnabled : undefined;
            resourceInputs["botBlacklistType"] = args ? args.botBlacklistType : undefined;
            resourceInputs["botBlacklistValue"] = args ? args.botBlacklistValue : undefined;
            resourceInputs["logmessage"] = args ? args.logmessage : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BotprofileBlacklistBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BotprofileBlacklistBinding resources.
 */
export interface BotprofileBlacklistBindingState {
    botBindComment?: pulumi.Input<string>;
    botBlacklist?: pulumi.Input<boolean>;
    botBlacklistActions?: pulumi.Input<pulumi.Input<string>[]>;
    botBlacklistEnabled?: pulumi.Input<string>;
    botBlacklistType?: pulumi.Input<string>;
    botBlacklistValue?: pulumi.Input<string>;
    logmessage?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BotprofileBlacklistBinding resource.
 */
export interface BotprofileBlacklistBindingArgs {
    botBindComment?: pulumi.Input<string>;
    botBlacklist?: pulumi.Input<boolean>;
    botBlacklistActions?: pulumi.Input<pulumi.Input<string>[]>;
    botBlacklistEnabled?: pulumi.Input<string>;
    botBlacklistType?: pulumi.Input<string>;
    botBlacklistValue: pulumi.Input<string>;
    logmessage?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
