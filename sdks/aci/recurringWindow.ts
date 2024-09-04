// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RecurringWindow extends pulumi.CustomResource {
    /**
     * Get an existing RecurringWindow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RecurringWindowState, opts?: pulumi.CustomResourceOptions): RecurringWindow {
        return new RecurringWindow(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/recurringWindow:RecurringWindow';

    /**
     * Returns true if the given object is an instance of RecurringWindow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RecurringWindow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RecurringWindow.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly concurCap!: pulumi.Output<string>;
    public readonly day!: pulumi.Output<string>;
    public readonly hour!: pulumi.Output<string>;
    public readonly minute!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly nodeUpgInterval!: pulumi.Output<string>;
    public readonly procBreak!: pulumi.Output<string>;
    public readonly procCap!: pulumi.Output<string>;
    public readonly schedulerDn!: pulumi.Output<string>;
    public readonly timeCap!: pulumi.Output<string>;

    /**
     * Create a RecurringWindow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecurringWindowArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RecurringWindowArgs | RecurringWindowState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RecurringWindowState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["concurCap"] = state ? state.concurCap : undefined;
            resourceInputs["day"] = state ? state.day : undefined;
            resourceInputs["hour"] = state ? state.hour : undefined;
            resourceInputs["minute"] = state ? state.minute : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["nodeUpgInterval"] = state ? state.nodeUpgInterval : undefined;
            resourceInputs["procBreak"] = state ? state.procBreak : undefined;
            resourceInputs["procCap"] = state ? state.procCap : undefined;
            resourceInputs["schedulerDn"] = state ? state.schedulerDn : undefined;
            resourceInputs["timeCap"] = state ? state.timeCap : undefined;
        } else {
            const args = argsOrState as RecurringWindowArgs | undefined;
            if ((!args || args.schedulerDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedulerDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["concurCap"] = args ? args.concurCap : undefined;
            resourceInputs["day"] = args ? args.day : undefined;
            resourceInputs["hour"] = args ? args.hour : undefined;
            resourceInputs["minute"] = args ? args.minute : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["nodeUpgInterval"] = args ? args.nodeUpgInterval : undefined;
            resourceInputs["procBreak"] = args ? args.procBreak : undefined;
            resourceInputs["procCap"] = args ? args.procCap : undefined;
            resourceInputs["schedulerDn"] = args ? args.schedulerDn : undefined;
            resourceInputs["timeCap"] = args ? args.timeCap : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RecurringWindow.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RecurringWindow resources.
 */
export interface RecurringWindowState {
    annotation?: pulumi.Input<string>;
    concurCap?: pulumi.Input<string>;
    day?: pulumi.Input<string>;
    hour?: pulumi.Input<string>;
    minute?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    nodeUpgInterval?: pulumi.Input<string>;
    procBreak?: pulumi.Input<string>;
    procCap?: pulumi.Input<string>;
    schedulerDn?: pulumi.Input<string>;
    timeCap?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RecurringWindow resource.
 */
export interface RecurringWindowArgs {
    annotation?: pulumi.Input<string>;
    concurCap?: pulumi.Input<string>;
    day?: pulumi.Input<string>;
    hour?: pulumi.Input<string>;
    minute?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    nodeUpgInterval?: pulumi.Input<string>;
    procBreak?: pulumi.Input<string>;
    procCap?: pulumi.Input<string>;
    schedulerDn: pulumi.Input<string>;
    timeCap?: pulumi.Input<string>;
}
