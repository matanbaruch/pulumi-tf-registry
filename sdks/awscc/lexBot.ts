// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LexBot extends pulumi.CustomResource {
    /**
     * Get an existing LexBot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LexBotState, opts?: pulumi.CustomResourceOptions): LexBot {
        return new LexBot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/lexBot:LexBot';

    /**
     * Returns true if the given object is an instance of LexBot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LexBot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LexBot.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Specifies whether to build the bot locales after bot creation completes.
     */
    public readonly autoBuildBotLocales!: pulumi.Output<boolean>;
    /**
     * S3 location of bot definitions zip file, if it's not defined inline in CloudFormation.
     */
    public readonly botFileS3Location!: pulumi.Output<outputs.LexBotBotFileS3Location>;
    /**
     * Unique ID of resource
     */
    public /*out*/ readonly botId!: pulumi.Output<string>;
    /**
     * List of bot locales
     */
    public readonly botLocales!: pulumi.Output<outputs.LexBotBotLocale[]>;
    /**
     * A list of tags to add to the bot, which can only be added at bot creation.
     */
    public readonly botTags!: pulumi.Output<outputs.LexBotBotTag[]>;
    /**
     * Data privacy setting of the Bot.
     */
    public readonly dataPrivacy!: pulumi.Output<outputs.LexBotDataPrivacy>;
    /**
     * A description of the resource
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * IdleSessionTTLInSeconds of the resource
     */
    public readonly idleSessionTtlInSeconds!: pulumi.Output<number>;
    /**
     * Unique name for a resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
     */
    public readonly roleArn!: pulumi.Output<string>;
    /**
     * Configuring the test bot alias settings for a given bot
     */
    public readonly testBotAliasSettings!: pulumi.Output<outputs.LexBotTestBotAliasSettings>;
    /**
     * A list of tags to add to the test alias for a bot, , which can only be added at bot/bot alias creation.
     */
    public readonly testBotAliasTags!: pulumi.Output<outputs.LexBotTestBotAliasTag[]>;

    /**
     * Create a LexBot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LexBotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LexBotArgs | LexBotState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LexBotState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["autoBuildBotLocales"] = state ? state.autoBuildBotLocales : undefined;
            resourceInputs["botFileS3Location"] = state ? state.botFileS3Location : undefined;
            resourceInputs["botId"] = state ? state.botId : undefined;
            resourceInputs["botLocales"] = state ? state.botLocales : undefined;
            resourceInputs["botTags"] = state ? state.botTags : undefined;
            resourceInputs["dataPrivacy"] = state ? state.dataPrivacy : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["idleSessionTtlInSeconds"] = state ? state.idleSessionTtlInSeconds : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["testBotAliasSettings"] = state ? state.testBotAliasSettings : undefined;
            resourceInputs["testBotAliasTags"] = state ? state.testBotAliasTags : undefined;
        } else {
            const args = argsOrState as LexBotArgs | undefined;
            if ((!args || args.dataPrivacy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataPrivacy'");
            }
            if ((!args || args.idleSessionTtlInSeconds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'idleSessionTtlInSeconds'");
            }
            if ((!args || args.roleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleArn'");
            }
            resourceInputs["autoBuildBotLocales"] = args ? args.autoBuildBotLocales : undefined;
            resourceInputs["botFileS3Location"] = args ? args.botFileS3Location : undefined;
            resourceInputs["botLocales"] = args ? args.botLocales : undefined;
            resourceInputs["botTags"] = args ? args.botTags : undefined;
            resourceInputs["dataPrivacy"] = args ? args.dataPrivacy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["idleSessionTtlInSeconds"] = args ? args.idleSessionTtlInSeconds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["testBotAliasSettings"] = args ? args.testBotAliasSettings : undefined;
            resourceInputs["testBotAliasTags"] = args ? args.testBotAliasTags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["botId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LexBot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LexBot resources.
 */
export interface LexBotState {
    arn?: pulumi.Input<string>;
    /**
     * Specifies whether to build the bot locales after bot creation completes.
     */
    autoBuildBotLocales?: pulumi.Input<boolean>;
    /**
     * S3 location of bot definitions zip file, if it's not defined inline in CloudFormation.
     */
    botFileS3Location?: pulumi.Input<inputs.LexBotBotFileS3Location>;
    /**
     * Unique ID of resource
     */
    botId?: pulumi.Input<string>;
    /**
     * List of bot locales
     */
    botLocales?: pulumi.Input<pulumi.Input<inputs.LexBotBotLocale>[]>;
    /**
     * A list of tags to add to the bot, which can only be added at bot creation.
     */
    botTags?: pulumi.Input<pulumi.Input<inputs.LexBotBotTag>[]>;
    /**
     * Data privacy setting of the Bot.
     */
    dataPrivacy?: pulumi.Input<inputs.LexBotDataPrivacy>;
    /**
     * A description of the resource
     */
    description?: pulumi.Input<string>;
    /**
     * IdleSessionTTLInSeconds of the resource
     */
    idleSessionTtlInSeconds?: pulumi.Input<number>;
    /**
     * Unique name for a resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
     */
    roleArn?: pulumi.Input<string>;
    /**
     * Configuring the test bot alias settings for a given bot
     */
    testBotAliasSettings?: pulumi.Input<inputs.LexBotTestBotAliasSettings>;
    /**
     * A list of tags to add to the test alias for a bot, , which can only be added at bot/bot alias creation.
     */
    testBotAliasTags?: pulumi.Input<pulumi.Input<inputs.LexBotTestBotAliasTag>[]>;
}

/**
 * The set of arguments for constructing a LexBot resource.
 */
export interface LexBotArgs {
    /**
     * Specifies whether to build the bot locales after bot creation completes.
     */
    autoBuildBotLocales?: pulumi.Input<boolean>;
    /**
     * S3 location of bot definitions zip file, if it's not defined inline in CloudFormation.
     */
    botFileS3Location?: pulumi.Input<inputs.LexBotBotFileS3Location>;
    /**
     * List of bot locales
     */
    botLocales?: pulumi.Input<pulumi.Input<inputs.LexBotBotLocale>[]>;
    /**
     * A list of tags to add to the bot, which can only be added at bot creation.
     */
    botTags?: pulumi.Input<pulumi.Input<inputs.LexBotBotTag>[]>;
    /**
     * Data privacy setting of the Bot.
     */
    dataPrivacy: pulumi.Input<inputs.LexBotDataPrivacy>;
    /**
     * A description of the resource
     */
    description?: pulumi.Input<string>;
    /**
     * IdleSessionTTLInSeconds of the resource
     */
    idleSessionTtlInSeconds: pulumi.Input<number>;
    /**
     * Unique name for a resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
     */
    roleArn: pulumi.Input<string>;
    /**
     * Configuring the test bot alias settings for a given bot
     */
    testBotAliasSettings?: pulumi.Input<inputs.LexBotTestBotAliasSettings>;
    /**
     * A list of tags to add to the test alias for a bot, , which can only be added at bot/bot alias creation.
     */
    testBotAliasTags?: pulumi.Input<pulumi.Input<inputs.LexBotTestBotAliasTag>[]>;
}
