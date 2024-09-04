// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SlsAlert extends pulumi.CustomResource {
    /**
     * Get an existing SlsAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlsAlertState, opts?: pulumi.CustomResourceOptions): SlsAlert {
        return new SlsAlert(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/slsAlert:SlsAlert';

    /**
     * Returns true if the given object is an instance of SlsAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlsAlert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlsAlert.__pulumiType;
    }

    public readonly alertName!: pulumi.Output<string>;
    public readonly configuration!: pulumi.Output<outputs.SlsAlertConfiguration>;
    public /*out*/ readonly createTime!: pulumi.Output<number>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly projectName!: pulumi.Output<string>;
    public readonly schedule!: pulumi.Output<outputs.SlsAlertSchedule>;
    public readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SlsAlertTimeouts | undefined>;

    /**
     * Create a SlsAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SlsAlertArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlsAlertArgs | SlsAlertState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlsAlertState | undefined;
            resourceInputs["alertName"] = state ? state.alertName : undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SlsAlertArgs | undefined;
            if ((!args || args.alertName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertName'");
            }
            if ((!args || args.configuration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configuration'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.schedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedule'");
            }
            resourceInputs["alertName"] = args ? args.alertName : undefined;
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlsAlert.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlsAlert resources.
 */
export interface SlsAlertState {
    alertName?: pulumi.Input<string>;
    configuration?: pulumi.Input<inputs.SlsAlertConfiguration>;
    createTime?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    projectName?: pulumi.Input<string>;
    schedule?: pulumi.Input<inputs.SlsAlertSchedule>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SlsAlertTimeouts>;
}

/**
 * The set of arguments for constructing a SlsAlert resource.
 */
export interface SlsAlertArgs {
    alertName: pulumi.Input<string>;
    configuration: pulumi.Input<inputs.SlsAlertConfiguration>;
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    projectName: pulumi.Input<string>;
    schedule: pulumi.Input<inputs.SlsAlertSchedule>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SlsAlertTimeouts>;
}
