// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectExtensioncontrollerExtenderprofileCellular extends pulumi.CustomResource {
    /**
     * Get an existing ObjectExtensioncontrollerExtenderprofileCellular resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectExtensioncontrollerExtenderprofileCellularState, opts?: pulumi.CustomResourceOptions): ObjectExtensioncontrollerExtenderprofileCellular {
        return new ObjectExtensioncontrollerExtenderprofileCellular(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectExtensioncontrollerExtenderprofileCellular:ObjectExtensioncontrollerExtenderprofileCellular';

    /**
     * Returns true if the given object is an instance of ObjectExtensioncontrollerExtenderprofileCellular.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectExtensioncontrollerExtenderprofileCellular {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectExtensioncontrollerExtenderprofileCellular.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly controllerReport!: pulumi.Output<outputs.ObjectExtensioncontrollerExtenderprofileCellularControllerReport | undefined>;
    public readonly dataplans!: pulumi.Output<string[]>;
    public readonly extenderProfile!: pulumi.Output<string>;
    public readonly modem1!: pulumi.Output<outputs.ObjectExtensioncontrollerExtenderprofileCellularModem1 | undefined>;
    public readonly modem2!: pulumi.Output<outputs.ObjectExtensioncontrollerExtenderprofileCellularModem2 | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly smsNotification!: pulumi.Output<outputs.ObjectExtensioncontrollerExtenderprofileCellularSmsNotification | undefined>;

    /**
     * Create a ObjectExtensioncontrollerExtenderprofileCellular resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectExtensioncontrollerExtenderprofileCellularArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectExtensioncontrollerExtenderprofileCellularArgs | ObjectExtensioncontrollerExtenderprofileCellularState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectExtensioncontrollerExtenderprofileCellularState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["controllerReport"] = state ? state.controllerReport : undefined;
            resourceInputs["dataplans"] = state ? state.dataplans : undefined;
            resourceInputs["extenderProfile"] = state ? state.extenderProfile : undefined;
            resourceInputs["modem1"] = state ? state.modem1 : undefined;
            resourceInputs["modem2"] = state ? state.modem2 : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["smsNotification"] = state ? state.smsNotification : undefined;
        } else {
            const args = argsOrState as ObjectExtensioncontrollerExtenderprofileCellularArgs | undefined;
            if ((!args || args.extenderProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extenderProfile'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["controllerReport"] = args ? args.controllerReport : undefined;
            resourceInputs["dataplans"] = args ? args.dataplans : undefined;
            resourceInputs["extenderProfile"] = args ? args.extenderProfile : undefined;
            resourceInputs["modem1"] = args ? args.modem1 : undefined;
            resourceInputs["modem2"] = args ? args.modem2 : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["smsNotification"] = args ? args.smsNotification : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectExtensioncontrollerExtenderprofileCellular.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectExtensioncontrollerExtenderprofileCellular resources.
 */
export interface ObjectExtensioncontrollerExtenderprofileCellularState {
    adom?: pulumi.Input<string>;
    controllerReport?: pulumi.Input<inputs.ObjectExtensioncontrollerExtenderprofileCellularControllerReport>;
    dataplans?: pulumi.Input<pulumi.Input<string>[]>;
    extenderProfile?: pulumi.Input<string>;
    modem1?: pulumi.Input<inputs.ObjectExtensioncontrollerExtenderprofileCellularModem1>;
    modem2?: pulumi.Input<inputs.ObjectExtensioncontrollerExtenderprofileCellularModem2>;
    scopetype?: pulumi.Input<string>;
    smsNotification?: pulumi.Input<inputs.ObjectExtensioncontrollerExtenderprofileCellularSmsNotification>;
}

/**
 * The set of arguments for constructing a ObjectExtensioncontrollerExtenderprofileCellular resource.
 */
export interface ObjectExtensioncontrollerExtenderprofileCellularArgs {
    adom?: pulumi.Input<string>;
    controllerReport?: pulumi.Input<inputs.ObjectExtensioncontrollerExtenderprofileCellularControllerReport>;
    dataplans?: pulumi.Input<pulumi.Input<string>[]>;
    extenderProfile: pulumi.Input<string>;
    modem1?: pulumi.Input<inputs.ObjectExtensioncontrollerExtenderprofileCellularModem1>;
    modem2?: pulumi.Input<inputs.ObjectExtensioncontrollerExtenderprofileCellularModem2>;
    scopetype?: pulumi.Input<string>;
    smsNotification?: pulumi.Input<inputs.ObjectExtensioncontrollerExtenderprofileCellularSmsNotification>;
}
