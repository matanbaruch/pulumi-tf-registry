// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystempSystemGlobal extends pulumi.CustomResource {
    /**
     * Get an existing SystempSystemGlobal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystempSystemGlobalState, opts?: pulumi.CustomResourceOptions): SystempSystemGlobal {
        return new SystempSystemGlobal(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systempSystemGlobal:SystempSystemGlobal';

    /**
     * Returns true if the given object is an instance of SystempSystemGlobal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystempSystemGlobal {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystempSystemGlobal.__pulumiType;
    }

    public readonly adminHttpsRedirect!: pulumi.Output<string>;
    public readonly adminPort!: pulumi.Output<number>;
    public readonly adminScp!: pulumi.Output<string>;
    public readonly adminSport!: pulumi.Output<number>;
    public readonly adminSshPort!: pulumi.Output<number>;
    public readonly adminSshV1!: pulumi.Output<string>;
    public readonly adminTelnetPort!: pulumi.Output<number>;
    public readonly admintimeout!: pulumi.Output<number>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly devprof!: pulumi.Output<string>;
    public readonly guiDeviceLatitude!: pulumi.Output<string | undefined>;
    public readonly guiDeviceLongitude!: pulumi.Output<string | undefined>;
    public readonly guiIpv6!: pulumi.Output<string>;
    public readonly guiLinesPerPage!: pulumi.Output<number>;
    public readonly guiTheme!: pulumi.Output<string>;
    public readonly hostname!: pulumi.Output<string | undefined>;
    public readonly language!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly switchController!: pulumi.Output<string>;
    public readonly timezones!: pulumi.Output<string[]>;

    /**
     * Create a SystempSystemGlobal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystempSystemGlobalArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystempSystemGlobalArgs | SystempSystemGlobalState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystempSystemGlobalState | undefined;
            resourceInputs["adminHttpsRedirect"] = state ? state.adminHttpsRedirect : undefined;
            resourceInputs["adminPort"] = state ? state.adminPort : undefined;
            resourceInputs["adminScp"] = state ? state.adminScp : undefined;
            resourceInputs["adminSport"] = state ? state.adminSport : undefined;
            resourceInputs["adminSshPort"] = state ? state.adminSshPort : undefined;
            resourceInputs["adminSshV1"] = state ? state.adminSshV1 : undefined;
            resourceInputs["adminTelnetPort"] = state ? state.adminTelnetPort : undefined;
            resourceInputs["admintimeout"] = state ? state.admintimeout : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["devprof"] = state ? state.devprof : undefined;
            resourceInputs["guiDeviceLatitude"] = state ? state.guiDeviceLatitude : undefined;
            resourceInputs["guiDeviceLongitude"] = state ? state.guiDeviceLongitude : undefined;
            resourceInputs["guiIpv6"] = state ? state.guiIpv6 : undefined;
            resourceInputs["guiLinesPerPage"] = state ? state.guiLinesPerPage : undefined;
            resourceInputs["guiTheme"] = state ? state.guiTheme : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["language"] = state ? state.language : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["switchController"] = state ? state.switchController : undefined;
            resourceInputs["timezones"] = state ? state.timezones : undefined;
        } else {
            const args = argsOrState as SystempSystemGlobalArgs | undefined;
            if ((!args || args.devprof === undefined) && !opts.urn) {
                throw new Error("Missing required property 'devprof'");
            }
            resourceInputs["adminHttpsRedirect"] = args ? args.adminHttpsRedirect : undefined;
            resourceInputs["adminPort"] = args ? args.adminPort : undefined;
            resourceInputs["adminScp"] = args ? args.adminScp : undefined;
            resourceInputs["adminSport"] = args ? args.adminSport : undefined;
            resourceInputs["adminSshPort"] = args ? args.adminSshPort : undefined;
            resourceInputs["adminSshV1"] = args ? args.adminSshV1 : undefined;
            resourceInputs["adminTelnetPort"] = args ? args.adminTelnetPort : undefined;
            resourceInputs["admintimeout"] = args ? args.admintimeout : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["devprof"] = args ? args.devprof : undefined;
            resourceInputs["guiDeviceLatitude"] = args ? args.guiDeviceLatitude : undefined;
            resourceInputs["guiDeviceLongitude"] = args ? args.guiDeviceLongitude : undefined;
            resourceInputs["guiIpv6"] = args ? args.guiIpv6 : undefined;
            resourceInputs["guiLinesPerPage"] = args ? args.guiLinesPerPage : undefined;
            resourceInputs["guiTheme"] = args ? args.guiTheme : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["language"] = args ? args.language : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["switchController"] = args ? args.switchController : undefined;
            resourceInputs["timezones"] = args ? args.timezones : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystempSystemGlobal.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystempSystemGlobal resources.
 */
export interface SystempSystemGlobalState {
    adminHttpsRedirect?: pulumi.Input<string>;
    adminPort?: pulumi.Input<number>;
    adminScp?: pulumi.Input<string>;
    adminSport?: pulumi.Input<number>;
    adminSshPort?: pulumi.Input<number>;
    adminSshV1?: pulumi.Input<string>;
    adminTelnetPort?: pulumi.Input<number>;
    admintimeout?: pulumi.Input<number>;
    adom?: pulumi.Input<string>;
    devprof?: pulumi.Input<string>;
    guiDeviceLatitude?: pulumi.Input<string>;
    guiDeviceLongitude?: pulumi.Input<string>;
    guiIpv6?: pulumi.Input<string>;
    guiLinesPerPage?: pulumi.Input<number>;
    guiTheme?: pulumi.Input<string>;
    hostname?: pulumi.Input<string>;
    language?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    switchController?: pulumi.Input<string>;
    timezones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SystempSystemGlobal resource.
 */
export interface SystempSystemGlobalArgs {
    adminHttpsRedirect?: pulumi.Input<string>;
    adminPort?: pulumi.Input<number>;
    adminScp?: pulumi.Input<string>;
    adminSport?: pulumi.Input<number>;
    adminSshPort?: pulumi.Input<number>;
    adminSshV1?: pulumi.Input<string>;
    adminTelnetPort?: pulumi.Input<number>;
    admintimeout?: pulumi.Input<number>;
    adom?: pulumi.Input<string>;
    devprof: pulumi.Input<string>;
    guiDeviceLatitude?: pulumi.Input<string>;
    guiDeviceLongitude?: pulumi.Input<string>;
    guiIpv6?: pulumi.Input<string>;
    guiLinesPerPage?: pulumi.Input<number>;
    guiTheme?: pulumi.Input<string>;
    hostname?: pulumi.Input<string>;
    language?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    switchController?: pulumi.Input<string>;
    timezones?: pulumi.Input<pulumi.Input<string>[]>;
}
