// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MobileAppEnablement extends pulumi.CustomResource {
    /**
     * Get an existing MobileAppEnablement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MobileAppEnablementState, opts?: pulumi.CustomResourceOptions): MobileAppEnablement {
        return new MobileAppEnablement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/mobileAppEnablement:MobileAppEnablement';

    /**
     * Returns true if the given object is an instance of MobileAppEnablement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MobileAppEnablement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MobileAppEnablement.__pulumiType;
    }

    /**
     * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
     */
    public readonly applicationId!: pulumi.Output<string | undefined>;
    /**
     * (Field has overlap with `dynatrace.MobileApplication`) Capture and analyze all user actions within your application.
     * Enable [Real User Monitoring (RUM)](https://dt-url.net/1n2b0prq) to monitor and improve your application's performance,
     * identify errors, and gain insight into your user's behavior and experience.
     */
    public readonly rum!: pulumi.Output<outputs.MobileAppEnablementRum>;
    /**
     * (Field has overlap with `dynatrace.MobileApplication`) [Session Replay on crashes](https://dt-url.net/session-replay)
     * gives you additional context for crash analysis in the form of video-like screen recordings that replay user actions
     * immediately preceding a detected crash, while providing [best-in-class security and data
     * protection](https://dt-url.net/b303zxj).
     */
    public readonly sessionReplay!: pulumi.Output<outputs.MobileAppEnablementSessionReplay>;

    /**
     * Create a MobileAppEnablement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MobileAppEnablementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MobileAppEnablementArgs | MobileAppEnablementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MobileAppEnablementState | undefined;
            resourceInputs["applicationId"] = state ? state.applicationId : undefined;
            resourceInputs["rum"] = state ? state.rum : undefined;
            resourceInputs["sessionReplay"] = state ? state.sessionReplay : undefined;
        } else {
            const args = argsOrState as MobileAppEnablementArgs | undefined;
            if ((!args || args.rum === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rum'");
            }
            if ((!args || args.sessionReplay === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sessionReplay'");
            }
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["rum"] = args ? args.rum : undefined;
            resourceInputs["sessionReplay"] = args ? args.sessionReplay : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MobileAppEnablement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MobileAppEnablement resources.
 */
export interface MobileAppEnablementState {
    /**
     * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * (Field has overlap with `dynatrace.MobileApplication`) Capture and analyze all user actions within your application.
     * Enable [Real User Monitoring (RUM)](https://dt-url.net/1n2b0prq) to monitor and improve your application's performance,
     * identify errors, and gain insight into your user's behavior and experience.
     */
    rum?: pulumi.Input<inputs.MobileAppEnablementRum>;
    /**
     * (Field has overlap with `dynatrace.MobileApplication`) [Session Replay on crashes](https://dt-url.net/session-replay)
     * gives you additional context for crash analysis in the form of video-like screen recordings that replay user actions
     * immediately preceding a detected crash, while providing [best-in-class security and data
     * protection](https://dt-url.net/b303zxj).
     */
    sessionReplay?: pulumi.Input<inputs.MobileAppEnablementSessionReplay>;
}

/**
 * The set of arguments for constructing a MobileAppEnablement resource.
 */
export interface MobileAppEnablementArgs {
    /**
     * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * (Field has overlap with `dynatrace.MobileApplication`) Capture and analyze all user actions within your application.
     * Enable [Real User Monitoring (RUM)](https://dt-url.net/1n2b0prq) to monitor and improve your application's performance,
     * identify errors, and gain insight into your user's behavior and experience.
     */
    rum: pulumi.Input<inputs.MobileAppEnablementRum>;
    /**
     * (Field has overlap with `dynatrace.MobileApplication`) [Session Replay on crashes](https://dt-url.net/session-replay)
     * gives you additional context for crash analysis in the form of video-like screen recordings that replay user actions
     * immediately preceding a detected crash, while providing [best-in-class security and data
     * protection](https://dt-url.net/b303zxj).
     */
    sessionReplay: pulumi.Input<inputs.MobileAppEnablementSessionReplay>;
}
