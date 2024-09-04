// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RumApplication extends pulumi.CustomResource {
    /**
     * Get an existing RumApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RumApplicationState, opts?: pulumi.CustomResourceOptions): RumApplication {
        return new RumApplication(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'datadog:index/rumApplication:RumApplication';

    /**
     * Returns true if the given object is an instance of RumApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RumApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RumApplication.__pulumiType;
    }

    /**
     * The client token.
     */
    public /*out*/ readonly clientToken!: pulumi.Output<string>;
    /**
     * Name of the RUM application.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Type of the RUM application. Supported values are `browser`, `ios`, `android`, `react-native`, `flutter`. Defaults to
     * `"browser"`.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a RumApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RumApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RumApplicationArgs | RumApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RumApplicationState | undefined;
            resourceInputs["clientToken"] = state ? state.clientToken : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as RumApplicationArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["clientToken"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RumApplication.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RumApplication resources.
 */
export interface RumApplicationState {
    /**
     * The client token.
     */
    clientToken?: pulumi.Input<string>;
    /**
     * Name of the RUM application.
     */
    name?: pulumi.Input<string>;
    /**
     * Type of the RUM application. Supported values are `browser`, `ios`, `android`, `react-native`, `flutter`. Defaults to
     * `"browser"`.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RumApplication resource.
 */
export interface RumApplicationArgs {
    /**
     * Name of the RUM application.
     */
    name?: pulumi.Input<string>;
    /**
     * Type of the RUM application. Supported values are `browser`, `ios`, `android`, `react-native`, `flutter`. Defaults to
     * `"browser"`.
     */
    type?: pulumi.Input<string>;
}
