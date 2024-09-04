// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CssCallbackTemplate extends pulumi.CustomResource {
    /**
     * Get an existing CssCallbackTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CssCallbackTemplateState, opts?: pulumi.CustomResourceOptions): CssCallbackTemplate {
        return new CssCallbackTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cssCallbackTemplate:CssCallbackTemplate';

    /**
     * Returns true if the given object is an instance of CssCallbackTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CssCallbackTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CssCallbackTemplate.__pulumiType;
    }

    /**
     * Callback Key, public callback URL.
     */
    public readonly callbackKey!: pulumi.Output<string | undefined>;
    /**
     * Description information.Maximum length: 1024 bytes.Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * PornCensorship callback URL.
     */
    public readonly pornCensorshipNotifyUrl!: pulumi.Output<string | undefined>;
    /**
     * Streaming Exception Callback URL.
     */
    public readonly pushExceptionNotifyUrl!: pulumi.Output<string | undefined>;
    /**
     * Recording callback URL.
     */
    public readonly recordNotifyUrl!: pulumi.Output<string | undefined>;
    /**
     * Snapshot callback URL.
     */
    public readonly snapshotNotifyUrl!: pulumi.Output<string | undefined>;
    /**
     * Launch callback URL.
     */
    public readonly streamBeginNotifyUrl!: pulumi.Output<string | undefined>;
    /**
     * Cutoff callback URL.
     */
    public readonly streamEndNotifyUrl!: pulumi.Output<string | undefined>;
    /**
     * Template name.Maximum length: 255 bytes. Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
     */
    public readonly templateName!: pulumi.Output<string>;

    /**
     * Create a CssCallbackTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CssCallbackTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CssCallbackTemplateArgs | CssCallbackTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CssCallbackTemplateState | undefined;
            resourceInputs["callbackKey"] = state ? state.callbackKey : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["pornCensorshipNotifyUrl"] = state ? state.pornCensorshipNotifyUrl : undefined;
            resourceInputs["pushExceptionNotifyUrl"] = state ? state.pushExceptionNotifyUrl : undefined;
            resourceInputs["recordNotifyUrl"] = state ? state.recordNotifyUrl : undefined;
            resourceInputs["snapshotNotifyUrl"] = state ? state.snapshotNotifyUrl : undefined;
            resourceInputs["streamBeginNotifyUrl"] = state ? state.streamBeginNotifyUrl : undefined;
            resourceInputs["streamEndNotifyUrl"] = state ? state.streamEndNotifyUrl : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
        } else {
            const args = argsOrState as CssCallbackTemplateArgs | undefined;
            if ((!args || args.templateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateName'");
            }
            resourceInputs["callbackKey"] = args ? args.callbackKey : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["pornCensorshipNotifyUrl"] = args ? args.pornCensorshipNotifyUrl : undefined;
            resourceInputs["pushExceptionNotifyUrl"] = args ? args.pushExceptionNotifyUrl : undefined;
            resourceInputs["recordNotifyUrl"] = args ? args.recordNotifyUrl : undefined;
            resourceInputs["snapshotNotifyUrl"] = args ? args.snapshotNotifyUrl : undefined;
            resourceInputs["streamBeginNotifyUrl"] = args ? args.streamBeginNotifyUrl : undefined;
            resourceInputs["streamEndNotifyUrl"] = args ? args.streamEndNotifyUrl : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CssCallbackTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CssCallbackTemplate resources.
 */
export interface CssCallbackTemplateState {
    /**
     * Callback Key, public callback URL.
     */
    callbackKey?: pulumi.Input<string>;
    /**
     * Description information.Maximum length: 1024 bytes.Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
     */
    description?: pulumi.Input<string>;
    /**
     * PornCensorship callback URL.
     */
    pornCensorshipNotifyUrl?: pulumi.Input<string>;
    /**
     * Streaming Exception Callback URL.
     */
    pushExceptionNotifyUrl?: pulumi.Input<string>;
    /**
     * Recording callback URL.
     */
    recordNotifyUrl?: pulumi.Input<string>;
    /**
     * Snapshot callback URL.
     */
    snapshotNotifyUrl?: pulumi.Input<string>;
    /**
     * Launch callback URL.
     */
    streamBeginNotifyUrl?: pulumi.Input<string>;
    /**
     * Cutoff callback URL.
     */
    streamEndNotifyUrl?: pulumi.Input<string>;
    /**
     * Template name.Maximum length: 255 bytes. Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
     */
    templateName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CssCallbackTemplate resource.
 */
export interface CssCallbackTemplateArgs {
    /**
     * Callback Key, public callback URL.
     */
    callbackKey?: pulumi.Input<string>;
    /**
     * Description information.Maximum length: 1024 bytes.Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
     */
    description?: pulumi.Input<string>;
    /**
     * PornCensorship callback URL.
     */
    pornCensorshipNotifyUrl?: pulumi.Input<string>;
    /**
     * Streaming Exception Callback URL.
     */
    pushExceptionNotifyUrl?: pulumi.Input<string>;
    /**
     * Recording callback URL.
     */
    recordNotifyUrl?: pulumi.Input<string>;
    /**
     * Snapshot callback URL.
     */
    snapshotNotifyUrl?: pulumi.Input<string>;
    /**
     * Launch callback URL.
     */
    streamBeginNotifyUrl?: pulumi.Input<string>;
    /**
     * Cutoff callback URL.
     */
    streamEndNotifyUrl?: pulumi.Input<string>;
    /**
     * Template name.Maximum length: 255 bytes. Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
     */
    templateName: pulumi.Input<string>;
}
