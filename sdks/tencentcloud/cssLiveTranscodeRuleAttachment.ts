// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CssLiveTranscodeRuleAttachment extends pulumi.CustomResource {
    /**
     * Get an existing CssLiveTranscodeRuleAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CssLiveTranscodeRuleAttachmentState, opts?: pulumi.CustomResourceOptions): CssLiveTranscodeRuleAttachment {
        return new CssLiveTranscodeRuleAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cssLiveTranscodeRuleAttachment:CssLiveTranscodeRuleAttachment';

    /**
     * Returns true if the given object is an instance of CssLiveTranscodeRuleAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CssLiveTranscodeRuleAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CssLiveTranscodeRuleAttachment.__pulumiType;
    }

    /**
     * app name which you want to bind, can be empty string if not binding specific app name.
     */
    public readonly appName!: pulumi.Output<string>;
    /**
     * create time.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * domain name hich you want to bind the transcode template.
     */
    public readonly domainName!: pulumi.Output<string>;
    /**
     * stream name which you want to bind, can be empty string if not binding specific stream.
     */
    public readonly streamName!: pulumi.Output<string>;
    /**
     * template created by css_live_transcode_template.
     */
    public readonly templateId!: pulumi.Output<number>;
    /**
     * update time.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a CssLiveTranscodeRuleAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CssLiveTranscodeRuleAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CssLiveTranscodeRuleAttachmentArgs | CssLiveTranscodeRuleAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CssLiveTranscodeRuleAttachmentState | undefined;
            resourceInputs["appName"] = state ? state.appName : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["streamName"] = state ? state.streamName : undefined;
            resourceInputs["templateId"] = state ? state.templateId : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as CssLiveTranscodeRuleAttachmentArgs | undefined;
            if ((!args || args.appName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appName'");
            }
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.streamName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'streamName'");
            }
            if ((!args || args.templateId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateId'");
            }
            resourceInputs["appName"] = args ? args.appName : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["streamName"] = args ? args.streamName : undefined;
            resourceInputs["templateId"] = args ? args.templateId : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CssLiveTranscodeRuleAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CssLiveTranscodeRuleAttachment resources.
 */
export interface CssLiveTranscodeRuleAttachmentState {
    /**
     * app name which you want to bind, can be empty string if not binding specific app name.
     */
    appName?: pulumi.Input<string>;
    /**
     * create time.
     */
    createTime?: pulumi.Input<string>;
    /**
     * domain name hich you want to bind the transcode template.
     */
    domainName?: pulumi.Input<string>;
    /**
     * stream name which you want to bind, can be empty string if not binding specific stream.
     */
    streamName?: pulumi.Input<string>;
    /**
     * template created by css_live_transcode_template.
     */
    templateId?: pulumi.Input<number>;
    /**
     * update time.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CssLiveTranscodeRuleAttachment resource.
 */
export interface CssLiveTranscodeRuleAttachmentArgs {
    /**
     * app name which you want to bind, can be empty string if not binding specific app name.
     */
    appName: pulumi.Input<string>;
    /**
     * domain name hich you want to bind the transcode template.
     */
    domainName: pulumi.Input<string>;
    /**
     * stream name which you want to bind, can be empty string if not binding specific stream.
     */
    streamName: pulumi.Input<string>;
    /**
     * template created by css_live_transcode_template.
     */
    templateId: pulumi.Input<number>;
}
