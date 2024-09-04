// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LogsyslogdOverridesetting extends pulumi.CustomResource {
    /**
     * Get an existing LogsyslogdOverridesetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogsyslogdOverridesettingState, opts?: pulumi.CustomResourceOptions): LogsyslogdOverridesetting {
        return new LogsyslogdOverridesetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/logsyslogdOverridesetting:LogsyslogdOverridesetting';

    /**
     * Returns true if the given object is an instance of LogsyslogdOverridesetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogsyslogdOverridesetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogsyslogdOverridesetting.__pulumiType;
    }

    public readonly certificate!: pulumi.Output<string>;
    public readonly csv!: pulumi.Output<string>;
    public readonly encAlgorithm!: pulumi.Output<string>;
    public readonly facility!: pulumi.Output<string>;
    public readonly mode!: pulumi.Output<string>;
    public readonly override!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;
    public readonly server!: pulumi.Output<string>;
    public readonly sourceIp!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a LogsyslogdOverridesetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LogsyslogdOverridesettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogsyslogdOverridesettingArgs | LogsyslogdOverridesettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogsyslogdOverridesettingState | undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["csv"] = state ? state.csv : undefined;
            resourceInputs["encAlgorithm"] = state ? state.encAlgorithm : undefined;
            resourceInputs["facility"] = state ? state.facility : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["override"] = state ? state.override : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["sourceIp"] = state ? state.sourceIp : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as LogsyslogdOverridesettingArgs | undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["csv"] = args ? args.csv : undefined;
            resourceInputs["encAlgorithm"] = args ? args.encAlgorithm : undefined;
            resourceInputs["facility"] = args ? args.facility : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["override"] = args ? args.override : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["sourceIp"] = args ? args.sourceIp : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogsyslogdOverridesetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogsyslogdOverridesetting resources.
 */
export interface LogsyslogdOverridesettingState {
    certificate?: pulumi.Input<string>;
    csv?: pulumi.Input<string>;
    encAlgorithm?: pulumi.Input<string>;
    facility?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    override?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    server?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogsyslogdOverridesetting resource.
 */
export interface LogsyslogdOverridesettingArgs {
    certificate?: pulumi.Input<string>;
    csv?: pulumi.Input<string>;
    encAlgorithm?: pulumi.Input<string>;
    facility?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    override?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    server?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
