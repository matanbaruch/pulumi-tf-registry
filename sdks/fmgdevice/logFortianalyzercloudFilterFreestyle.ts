// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LogFortianalyzercloudFilterFreestyle extends pulumi.CustomResource {
    /**
     * Get an existing LogFortianalyzercloudFilterFreestyle resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogFortianalyzercloudFilterFreestyleState, opts?: pulumi.CustomResourceOptions): LogFortianalyzercloudFilterFreestyle {
        return new LogFortianalyzercloudFilterFreestyle(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/logFortianalyzercloudFilterFreestyle:LogFortianalyzercloudFilterFreestyle';

    /**
     * Returns true if the given object is an instance of LogFortianalyzercloudFilterFreestyle.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogFortianalyzercloudFilterFreestyle {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogFortianalyzercloudFilterFreestyle.__pulumiType;
    }

    public readonly category!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly filter!: pulumi.Output<string | undefined>;
    public readonly filterType!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;

    /**
     * Create a LogFortianalyzercloudFilterFreestyle resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LogFortianalyzercloudFilterFreestyleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogFortianalyzercloudFilterFreestyleArgs | LogFortianalyzercloudFilterFreestyleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogFortianalyzercloudFilterFreestyleState | undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["filterType"] = state ? state.filterType : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
        } else {
            const args = argsOrState as LogFortianalyzercloudFilterFreestyleArgs | undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["filterType"] = args ? args.filterType : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogFortianalyzercloudFilterFreestyle.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogFortianalyzercloudFilterFreestyle resources.
 */
export interface LogFortianalyzercloudFilterFreestyleState {
    category?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    filterType?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a LogFortianalyzercloudFilterFreestyle resource.
 */
export interface LogFortianalyzercloudFilterFreestyleArgs {
    category?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    filter?: pulumi.Input<string>;
    filterType?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
}
