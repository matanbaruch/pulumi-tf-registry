// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemLogfetchServersettings extends pulumi.CustomResource {
    /**
     * Get an existing SystemLogfetchServersettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemLogfetchServersettingsState, opts?: pulumi.CustomResourceOptions): SystemLogfetchServersettings {
        return new SystemLogfetchServersettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemLogfetchServersettings:SystemLogfetchServersettings';

    /**
     * Returns true if the given object is an instance of SystemLogfetchServersettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemLogfetchServersettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemLogfetchServersettings.__pulumiType;
    }

    public readonly maxConnPerSession!: pulumi.Output<number>;
    public readonly maxSessions!: pulumi.Output<number>;
    public readonly sessionTimeout!: pulumi.Output<number>;

    /**
     * Create a SystemLogfetchServersettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemLogfetchServersettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemLogfetchServersettingsArgs | SystemLogfetchServersettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemLogfetchServersettingsState | undefined;
            resourceInputs["maxConnPerSession"] = state ? state.maxConnPerSession : undefined;
            resourceInputs["maxSessions"] = state ? state.maxSessions : undefined;
            resourceInputs["sessionTimeout"] = state ? state.sessionTimeout : undefined;
        } else {
            const args = argsOrState as SystemLogfetchServersettingsArgs | undefined;
            resourceInputs["maxConnPerSession"] = args ? args.maxConnPerSession : undefined;
            resourceInputs["maxSessions"] = args ? args.maxSessions : undefined;
            resourceInputs["sessionTimeout"] = args ? args.sessionTimeout : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemLogfetchServersettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemLogfetchServersettings resources.
 */
export interface SystemLogfetchServersettingsState {
    maxConnPerSession?: pulumi.Input<number>;
    maxSessions?: pulumi.Input<number>;
    sessionTimeout?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SystemLogfetchServersettings resource.
 */
export interface SystemLogfetchServersettingsArgs {
    maxConnPerSession?: pulumi.Input<number>;
    maxSessions?: pulumi.Input<number>;
    sessionTimeout?: pulumi.Input<number>;
}
