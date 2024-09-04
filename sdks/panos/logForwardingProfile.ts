// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LogForwardingProfile extends pulumi.CustomResource {
    /**
     * Get an existing LogForwardingProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogForwardingProfileState, opts?: pulumi.CustomResourceOptions): LogForwardingProfile {
        return new LogForwardingProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/logForwardingProfile:LogForwardingProfile';

    /**
     * Returns true if the given object is an instance of LogForwardingProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogForwardingProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogForwardingProfile.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly enhancedLogging!: pulumi.Output<boolean | undefined>;
    public readonly matchLists!: pulumi.Output<outputs.LogForwardingProfileMatchList[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * The vsys this object belongs in.
     */
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a LogForwardingProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LogForwardingProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogForwardingProfileArgs | LogForwardingProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogForwardingProfileState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enhancedLogging"] = state ? state.enhancedLogging : undefined;
            resourceInputs["matchLists"] = state ? state.matchLists : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as LogForwardingProfileArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enhancedLogging"] = args ? args.enhancedLogging : undefined;
            resourceInputs["matchLists"] = args ? args.matchLists : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogForwardingProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogForwardingProfile resources.
 */
export interface LogForwardingProfileState {
    description?: pulumi.Input<string>;
    enhancedLogging?: pulumi.Input<boolean>;
    matchLists?: pulumi.Input<pulumi.Input<inputs.LogForwardingProfileMatchList>[]>;
    name?: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogForwardingProfile resource.
 */
export interface LogForwardingProfileArgs {
    description?: pulumi.Input<string>;
    enhancedLogging?: pulumi.Input<boolean>;
    matchLists?: pulumi.Input<pulumi.Input<inputs.LogForwardingProfileMatchList>[]>;
    name?: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}
