// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemSnmpUser extends pulumi.CustomResource {
    /**
     * Get an existing SystemSnmpUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSnmpUserState, opts?: pulumi.CustomResourceOptions): SystemSnmpUser {
        return new SystemSnmpUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemSnmpUser:SystemSnmpUser';

    /**
     * Returns true if the given object is an instance of SystemSnmpUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSnmpUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSnmpUser.__pulumiType;
    }

    public readonly authProto!: pulumi.Output<string>;
    public readonly authPwds!: pulumi.Output<string[]>;
    public readonly events!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly notifyHosts!: pulumi.Output<string | undefined>;
    public readonly notifyHosts6!: pulumi.Output<string | undefined>;
    public readonly privProto!: pulumi.Output<string>;
    public readonly privPwds!: pulumi.Output<string[]>;
    public readonly queries!: pulumi.Output<string>;
    public readonly queryPort!: pulumi.Output<number>;
    public readonly securityLevel!: pulumi.Output<string>;

    /**
     * Create a SystemSnmpUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSnmpUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSnmpUserArgs | SystemSnmpUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSnmpUserState | undefined;
            resourceInputs["authProto"] = state ? state.authProto : undefined;
            resourceInputs["authPwds"] = state ? state.authPwds : undefined;
            resourceInputs["events"] = state ? state.events : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifyHosts"] = state ? state.notifyHosts : undefined;
            resourceInputs["notifyHosts6"] = state ? state.notifyHosts6 : undefined;
            resourceInputs["privProto"] = state ? state.privProto : undefined;
            resourceInputs["privPwds"] = state ? state.privPwds : undefined;
            resourceInputs["queries"] = state ? state.queries : undefined;
            resourceInputs["queryPort"] = state ? state.queryPort : undefined;
            resourceInputs["securityLevel"] = state ? state.securityLevel : undefined;
        } else {
            const args = argsOrState as SystemSnmpUserArgs | undefined;
            resourceInputs["authProto"] = args ? args.authProto : undefined;
            resourceInputs["authPwds"] = args?.authPwds ? pulumi.secret(args.authPwds) : undefined;
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifyHosts"] = args ? args.notifyHosts : undefined;
            resourceInputs["notifyHosts6"] = args ? args.notifyHosts6 : undefined;
            resourceInputs["privProto"] = args ? args.privProto : undefined;
            resourceInputs["privPwds"] = args?.privPwds ? pulumi.secret(args.privPwds) : undefined;
            resourceInputs["queries"] = args ? args.queries : undefined;
            resourceInputs["queryPort"] = args ? args.queryPort : undefined;
            resourceInputs["securityLevel"] = args ? args.securityLevel : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["authPwds", "privPwds"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SystemSnmpUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSnmpUser resources.
 */
export interface SystemSnmpUserState {
    authProto?: pulumi.Input<string>;
    authPwds?: pulumi.Input<pulumi.Input<string>[]>;
    events?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    notifyHosts?: pulumi.Input<string>;
    notifyHosts6?: pulumi.Input<string>;
    privProto?: pulumi.Input<string>;
    privPwds?: pulumi.Input<pulumi.Input<string>[]>;
    queries?: pulumi.Input<string>;
    queryPort?: pulumi.Input<number>;
    securityLevel?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemSnmpUser resource.
 */
export interface SystemSnmpUserArgs {
    authProto?: pulumi.Input<string>;
    authPwds?: pulumi.Input<pulumi.Input<string>[]>;
    events?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    notifyHosts?: pulumi.Input<string>;
    notifyHosts6?: pulumi.Input<string>;
    privProto?: pulumi.Input<string>;
    privPwds?: pulumi.Input<pulumi.Input<string>[]>;
    queries?: pulumi.Input<string>;
    queryPort?: pulumi.Input<number>;
    securityLevel?: pulumi.Input<string>;
}
